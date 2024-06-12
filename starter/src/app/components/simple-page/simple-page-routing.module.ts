import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplePage1Component } from './sample-page1/sample-page1.component';
import { SamplePage2Component } from './sample-page2/sample-page2.component';

const routes: Routes = [
  {
    path: "sample-page-1",
    component: SamplePage1Component,
    data: {
      title: "Sample Page 1",
      breadcrumb: "Sample Page 1",
    },
  },
  {
    path: "sample-page-2",
    component: SamplePage2Component,
    data: {
      title: "Sample Page 2",
      breadcrumb: "Sample Page 2",
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimplePageRoutingModule { }
