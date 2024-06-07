import { UpdatePasswordDto } from './dto/update-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ResetPasswordRequestDto } from './dto/reset-password-request.dto';
import { BadRequestException, Injectable, Req, Res } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { CurrentUser } from './decorators/user.decorator';
import { SignupDto } from './dto/register.dto';
import { ConfigService } from '@nestjs/config';
import UpdateProfileDto from './dto/update-profile.dto';
import { EmailService } from 'src/email/email.service';
import { User } from '../users/entities/user.entity';
import { randomPassword } from '../helpers/random-password';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
    private readonly emailService: EmailService
  ) {}

  async validateUser(email: string, password: string): Promise<{ data: User }> {
    const { data: user } = await this.usersService.findByEmail(email);
    const passwordMatch: boolean = await this.passwordMatch(password, user?.password);
    if (!passwordMatch || !user) throw new BadRequestException('Les identifiants saisis sont invalides');
    return { data: user };
  }

  async passwordMatch(password: string, hash: string): Promise<boolean> {
    try {
      return await bcrypt.compare(password, hash);
    } catch {
      throw new BadRequestException('Les identifiants saisis sont invalides');
    }
  }

  async loginGoogle(@Res() res: Response): Promise<void> {
    return res.redirect(this.configService.get('FRONTEND_URI'));
  }

  async login(@Req() req: Request): Promise<{ data: Express.User }> {
    const data: Express.User = req.user;
    return { data };
  }

  async logout(@Req() request: Request): Promise<void> {
    request.session.destroy(() => {});
  }

  async profile(@CurrentUser() data: User): Promise<{ data: User }> {
    return { data };
  }

  async updateProfile(@CurrentUser() currentUser: User, dto: UpdateProfileDto): Promise<{ data: User }> {
    return await this.usersService.updateProfile(currentUser, dto);
  }

  async register(registerDto: SignupDto): Promise<{ data: User }> {
    const { data } = await this.usersService.register(registerDto);
    return { data };
  }

  async updatePassword(@CurrentUser() user: User, dto: UpdatePasswordDto): Promise<{ data: User }> {
    const { password } = dto;
    if (user.password) {
      const isMatch: boolean = await this.passwordMatch(dto.old_password, user.password);
      if (!isMatch) throw new BadRequestException("L'ancien mot de passe est incorrect");
    }
    try {
      await this.usersService.updatePassword(user.id, password);
      return { data: user };
    } catch {
      throw new BadRequestException('Erreur lors de la mise à jour du mot de passe');
    }
  }

  async resetPasswordRequest(dto: ResetPasswordRequestDto): Promise<{ data: User }> {
    const { email } = dto;
    const { data } = await this.usersService.findByEmail(email);
    if (!data) throw new BadRequestException('Aucun utilisateur trouvé avec cet email');
    const token = randomPassword();
    await this.usersService.update(data.id, { token });
    await this.emailService.sendResetPasswordEmail(data, token);
    return { data };
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto): Promise<{ data: User }> {
    const { token, password } = resetPasswordDto;
    const { data } = await this.usersService.findByResetToken(token);
    try {
      await this.usersService.updatePassword(data.id, password);
      return { data };
    } catch {
      throw new BadRequestException('Erreur lors de la réinitialisation du mot de passe');
    }
  }
}
