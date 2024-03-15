import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BasketService } from './basket.service';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';
import { HomePageComponent } from './home-page/home-page.component';

import { AppRoutingModule } from './app-routing-module';
import { HttpClientModule } from '@angular/common/http';
import { EventService } from './event-service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingBasketComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule
  ],
  providers: [
    BasketService,
    EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
