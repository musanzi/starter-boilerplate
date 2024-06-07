import { EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent } from 'typeorm';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  listenTo() {
    return User;
  }

  async beforeInsert(event: InsertEvent<User>): Promise<void> {
    const { password } = event.entity;
    event.entity.password = await bcrypt.hash(password, 10);
  }

  async beforeUpdate(event: UpdateEvent<User>): Promise<void> {
    const { password } = event.entity;
    if (password) {
      event.entity.password = await bcrypt.hash(password, 10);
    }
  }
}
