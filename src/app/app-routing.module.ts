import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsDetailComponent } from './pages/products-detail/products-detail.component';
import { ProductsComponent } from './pages/products/products.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CheckComponent } from './sessions/check/check.component';
import { LoginComponent } from './sessions/login/login.component';
import { RegisterComponent } from './sessions/register/register.component';
import { RetrieveComponent } from './sessions/retrieve/retrieve.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'about-us', component: HomeComponent},
  {path:'products', component: ProductsComponent},
  {path:'products-detail/:id', component: ProductsDetailComponent},
  {path:'check', component: CheckComponent},
  {path:'register', component: RegisterComponent},
  {path:'retrieve', component: RetrieveComponent},
  {path:'shoping-cart', component: ShoppingCartComponent},
  {path:'welcome', component: WelcomeComponent},
  {path:'**', redirectTo:'home',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
