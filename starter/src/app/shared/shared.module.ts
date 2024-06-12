import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import {
  NgbActiveModal,
  NgbModule
} from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";

import { ToastrModule } from "ngx-toastr";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { CommanSvgIconComponent } from "./components/comman-svg-icon/comman-svg-icon.component";
import { FeatherIconsComponent } from "./components/feather-icons/feather-icons.component";
import { FooterComponent } from "./components/footer/footer.component";
import { BookmarkComponent } from "./components/header/bookmark/bookmark.component";
import { CartComponent } from "./components/header/cart/cart.component";
import { HeaderComponent } from "./components/header/header.component";
import { LanguageComponent } from "./components/header/language/language.component";
import { MessagesComponent } from "./components/header/messages/messages.component";
import { NotiticationsComponent } from "./components/header/notitications/notitications.component";
import { ProfileComponent } from "./components/header/profile/profile.component";
import { SearchComponent } from "./components/header/search/search.component";
import { ThemeModeComponent } from "./components/header/theme-mode/theme-mode.component";
import { ContentComponent } from "./components/layout/content/content.component";
import { FullComponent } from "./components/layout/full/full.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { SvgIconComponent } from "./components/svg-icon/svg-icon.component";
import { TapToTopComponent } from "./components/tap-to-top/tap-to-top.component";
import { ClickOutsideDirective } from "./directives/click-outside.directive";

@NgModule({
  declarations: [
    ContentComponent,
    FullComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    TapToTopComponent,
    FeatherIconsComponent,
    SearchComponent,
    NotiticationsComponent,
    BookmarkComponent,
    MessagesComponent,
    CartComponent,
    SvgIconComponent,
    BreadcrumbComponent,
    ThemeModeComponent,
    ProfileComponent,
    CommanSvgIconComponent,
    LanguageComponent,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forRoot(),
    ToastrModule.forRoot(),
    NgbModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  exports: [
    FeatherIconsComponent,
    TapToTopComponent,
    SvgIconComponent,
    CommanSvgIconComponent,
    LoaderComponent,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ClickOutsideDirective
  ],

  providers: [NgbActiveModal],
})
export class SharedModule {}
