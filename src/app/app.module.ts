import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AsideComponent } from './Components/aside/aside.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductsCardComponent } from './Components/products/products-card/products-card.component';
import { ProductsDetailsComponent } from './Components/products-details/products-details.component';
import { ChildComponent } from './Components/home/child/child.component';
import { SecondChildComponent } from './Components/home/second-child/second-child.component';
import { NotFountComponent } from './Components/not-fount/not-fount.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AsideComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ProductsCardComponent,
    ProductsDetailsComponent,
    ChildComponent,
    SecondChildComponent,
    NotFountComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
