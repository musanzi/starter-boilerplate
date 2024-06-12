import { Component } from "@angular/core";
import { NavService } from "../../services/nav.service";
import { SearchService } from "../../services/search.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})

export class HeaderComponent {

  public isFlip : boolean = false;
  public isSearchOpen : boolean = false;
  public open : boolean = false;

  constructor(
    public navService: NavService,
    public searchService :SearchService
  ) {}

  sidebarToggle() {
    this.navService.collapseSidebar = !this.navService.collapseSidebar;
  }
}
