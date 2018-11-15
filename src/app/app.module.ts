import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HommeComponent } from './home/homme/homme.component';
import { EnfantComponent } from './home/enfant/enfant.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  declarations: [ AppComponent, HeaderComponent, HomeComponent, FooterComponent, SidebarComponent, HommeComponent, EnfantComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
