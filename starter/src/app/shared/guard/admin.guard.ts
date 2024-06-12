import { Injectable, OnInit } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdminGuard implements OnInit {
  url: any;
  constructor(public router: Router) {}
  ngOnInit() {
    this.url = this.router.url;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // Guard for user is login or not
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (!user || user === null) {
      this.router.navigate(["/auth/login"]);
      return true;
    } else if (user) {
      if (!Object.keys(user).length) {
        this.router.navigate(["/auth/login"]);
        return true;
      }
    }
    return true;
  }
}
