import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/shared/header/header.component';
import { FooterComponent } from './home/shared/footer/footer.component';
import { TrangchuComponent } from './home/pages/trangchu/trangchu.component';
import { TintuyendungComponent } from './home/pages/tintuyendung/tintuyendung.component';
import { VieclamComponent } from './home/pages/vieclam/vieclam.component';
import { CongtyComponent } from './home/pages/congty/congty.component';
import { LayoutComponent } from './home/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TrangchuComponent,
    TintuyendungComponent,
    VieclamComponent,
    CongtyComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
