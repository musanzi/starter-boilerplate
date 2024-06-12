import { AfterViewInit, Component, Input } from "@angular/core";
import * as feather from "feather-icons";

@Component({
  selector: "app-feather-icons",
  templateUrl: "./feather-icons.component.html",
  styleUrls: ["./feather-icons.component.scss"],
})
export class FeatherIconsComponent implements AfterViewInit {
  @Input() icons: string;
  @Input() class: string;

  ngAfterViewInit() {
    feather.replace();
  }
}
