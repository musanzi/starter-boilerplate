import { Injectable, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Subject, debounceTime, fromEvent, takeUntil } from "rxjs";

export interface Menu {
  headTitle1?: string;
  level?: number;
  headTitle2?: string;
  path?: string;
  title?: string;
  type?: string;
  icon?: string;
  active?: boolean;
  bookmark?: boolean;
  pinnedData?: boolean;
  items?: Menu[];
  children?: Menu[];
}

@Injectable({
  providedIn: "root",
})

export class NavService implements OnDestroy {
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );

  private unsubscriber: Subject<any> = new Subject();

  public language: boolean = false;

  public collapseSidebar: boolean = window.innerWidth < 1200 ? true : false;

  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, "resize")
      .pipe(debounceTime(0), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 1200) {
          this.collapseSidebar = true;
        } else {
          this.collapseSidebar = false;
        }
      });
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }



  MENUITEMS: Menu[] = [
    {
      headTitle1: "Pages",
    },
    {
      level: 1,
      title: "Pages",
      icon: "sample-page",
      type: "sub",
      active: true,
      children: [
        { path: "/pages/sample-page-1", title: "Sample Page 1", type: "link", bookmark: true },
        { path: "/pages/sample-page-2", title: "Sample Page 2", type: "link" },
      ],
    },
    { level: 1, path: "/sample-page", title: "Sample Page", icon: "sample-page", type: "link" },

  ];
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

  ngOnDestroy() {
    this.unsubscriber.complete();
  }
}
