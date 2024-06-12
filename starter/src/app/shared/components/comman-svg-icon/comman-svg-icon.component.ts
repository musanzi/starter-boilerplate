import { Component, Input } from "@angular/core";

@Component({
  selector: "app-comman-svg-icon",
  templateUrl: "./comman-svg-icon.component.html",
  styleUrls: ["./comman-svg-icon.component.scss"],
})
export class CommanSvgIconComponent {
  @Input() icon: string;
  @Input() class: string;
}
