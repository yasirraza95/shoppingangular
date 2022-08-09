import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderDetailComponent } from './components/order-detail/order-detail.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { WhyComponent } from './components/why/why.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'why', component: WhyComponent},
	{path: 'about', component: AboutComponent},
	{path: 'cart', component: CartComponent},
	{path: 'contact', component: ContactComponent},
	{path: 'forgot', component: ForgotComponent},
  {path: 'login', component: LoginComponent},
  {path: 'detail', component: OrderDetailComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'wishlist', component: WishlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
