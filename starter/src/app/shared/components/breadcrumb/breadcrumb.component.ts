import { Component } from "@angular/core";
import {
  ActivatedRoute,
  NavigationEnd,
  PRIMARY_OUTLET,
  Router,
} from "@angular/router";
import { filter, map } from "rxjs";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.scss"],
})
export class BreadcrumbComponent {
  breadcrumbs: {
    parentBreadcrumb?: string;
    childBreadcrumb?: string;
    enable?: boolean;
  };
  title: string = "";

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .pipe(filter((route) => route.outlet === PRIMARY_OUTLET))
      .subscribe((route) => {
        const title = route.snapshot.data["title"];
        const parent = route.parent?.snapshot.data["breadcrumb"];
        const isEnable = route.parent?.snapshot.data["isEnable"];
        const child = route.snapshot.data["breadcrumb"];
        this.breadcrumbs = {};
        this.title = title;
        this.breadcrumbs = {
          parentBreadcrumb: parent,
          childBreadcrumb: child,
          enable: isEnable,
        };
      });
  }
}
