import { Routes } from "@angular/router";
import { SamplePageComponent } from "../../components/simple-page/sample-page/sample-page.component";

export const content: Routes = [
  {
    path: "sample-page",
    component: SamplePageComponent,
    data: {
      title: "Sample Page",
      breadcrumb: "Sample Page",
    },
  },
  {
    path: "pages",
    loadChildren: () =>
      import("../../components/simple-page/simple-page.module").then(
        (m) => m.SimplePageModule
      ),
    data: {
      title: "Sample Page",
      breadcrumb: "Sample Page",
    },
  },
];
