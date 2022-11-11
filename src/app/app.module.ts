import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsDetailComponent } from './pages/products-detail/products-detail.component';
import { SessionsComponent } from './pages/sessions/sessions.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CheckComponent } from './sessions/check/check.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
import { RetrieveComponent } from './sessions/retrieve/retrieve.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    HomeComponent,
    ProductsComponent,
    ProductsDetailComponent,
    SessionsComponent,
    ShoppingCartComponent,
    WelcomeComponent,
    CheckComponent,
    LoginComponent,
    RegisterComponent,
    RetrieveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
