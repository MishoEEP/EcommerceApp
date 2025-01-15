// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { ProductListComponent } from './components/product-list/product-list.component';
// import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { ProductService } from './services/product.service';
// import { Routes, RouterModule } from '@angular/router';
// import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
// import { SearchComponent } from './components/search/search.component';
// import { ProductDetailsComponent } from './components/product-details/product-details.component';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
// import { CartStatusComponent } from './components/cart-status/cart-status.component';
// import { CartDetailsComponent } from './components/cart-details/cart-details.component';
// import { CheckoutComponent } from './components/checkout/checkout.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { LoginStatusComponent } from './components/login-status/login-status.component';
// import { AuthGuard, AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
// import myAppConfig from './config/my-app-config';
// import { AuthInterceptorService } from './services/auth-interceptor.service';

// const routes: Routes = [
//   {path: 'checkout', component: CheckoutComponent},
//   {path: 'cart-details', component: CartDetailsComponent},
//   {path: 'products/:id', component: ProductDetailsComponent},
//   {path: 'search/:keyword', component: ProductListComponent},
//   {path: 'category/:id', component: ProductListComponent},
//   {path: 'category', component: ProductListComponent},
//   {path: 'products', component: ProductListComponent},
//   {path: '', redirectTo: '/products', pathMatch: 'full'},
//   {path: '**', redirectTo: '/products', pathMatch: 'full'}
// ];
// @NgModule({
//   declarations: [
//     AppComponent,
//     ProductListComponent,
//     ProductCategoryMenuComponent,
//     SearchComponent,
//     ProductDetailsComponent,
//     CartStatusComponent,
//     CartDetailsComponent,
//     CheckoutComponent,
//     LoginStatusComponent
//   ],
//   imports: [
//     RouterModule.forRoot(routes),
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//     NgbModule,
//     NgbPaginationModule,
//     ReactiveFormsModule,

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { SearchComponent } from './components/search/search.component';
import { ProductService } from './services/product.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from
'@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from
'./components/checkout/checkout.component';
import { AuthGuard, AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import myAppConfig from './config/my-app-config';
import { LoginStatusComponent } from './components/login-status/login-status.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { MembersPageComponent } from './components/members-page/members-page.component';


const routes: Routes = [

  // {path: 'order-history', component: OrderHistoryComponent, canActivate: [AuthGuard]},
  {path: 'members', component: MembersPageComponent,  canActivate: [AuthGuard] },

  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'search/:keyword', component: ProductListComponent},
  {path: 'category/:id', component: ProductListComponent},
  {path: 'category', component: ProductListComponent},
  {path: 'products', component: ProductListComponent},
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: '**', redirectTo: '/products', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductCategoryMenuComponent,
    CheckoutComponent,
    CartStatusComponent,
    CartDetailsComponent,
    SearchComponent,
    LoginStatusComponent,
    MembersPageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      ...myAppConfig.auth,
      // cacheLocation: 'localstorage',
      httpInterceptor: {
        ...myAppConfig.httpInterceptor,
      },
    })
  ],
  providers: [ProductService,  {provide: HTTP_INTERCEPTORS, useClass:
AuthInterceptorService, multi: true, },],
  bootstrap: [AppComponent]
})
export class AppModule { }
