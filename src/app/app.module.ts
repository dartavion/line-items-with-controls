import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CartSummaryModule } from './cart-summary/cart-summary.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    CartModule,
    CartSummaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
