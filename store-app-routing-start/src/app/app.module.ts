import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@angular/router'

import { AppComponent } from './app.component';

// Common components
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavComponent } from './nav/nav.component';

// Product components
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductFormComponent } from './products/product-form/product-form.component';

// Customer components
import { CustomersComponent } from './customers/customers.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customers/customer-detail/customer-detail.component';
import { CustomerFormComponent } from './customers/customer-form/customer-form.component';
// Services
import { LoggingService } from './services/logging.service';
import { ProductsService } from './services/products.service';
import { CustomersService } from './services/customers.service';
import { Component } from '@angular/core/src/metadata/directives';
import { ProductTableComponent } from './product-table/product-table.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import { ProductAddComponent } from './products/product-add/product-add.component';


const appRoutes: Routes =[
  {path:'products',component:ProductsComponent,pathMatch:'prefix',
  children:[
    {path:'add',
    component:ProductAddComponent,
    pathMatch:'full'},
    {  path:':id',
    component:ProductDetailComponent,
    pathMatch:'full'},
    {      path:':id/edit',
      component:ProductFormComponent,
      pathMatch:'full'}
    
  ]},
  // {path: 'products', component:ProductsComponent,pathMatch: 'full' },
  // {path:'products/:id',component:ProductDetailComponent,pathMatch: 'full'},
  // {path:'products/:id/edit',component:ProductFormComponent,pathMatch: 'full'},
 {path:'customers',component:CustomersComponent,pathMatch:'prefix',
children:[
  {path:'add',
  component:CustomerAddComponent,
  pathMatch:'full'},
  {  path:':id',
  component:CustomerDetailComponent,
  pathMatch:'full'},
  {path:':id/edit',
  component:CustomerFormComponent,
  pathMatch:'full'}
  
]},
{path:'product-table',component:ProductTableComponent},
  // {path: 'customers', component:CustomersComponent,pathMatch: 'full' },
  // {path:'customers/:id',component:CustomerDetailComponent,pathMatch: 'full'},
  // {path:'customers/:id/edit',component:CustomerFormComponent,pathMatch: 'full'},
   {path: '',component:HomeComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'**',redirectTo:'not-found'}
  ];
  console.log(appRoutes);
@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    NotFoundComponent,
    NavComponent,

    ProductsComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFormComponent,

    CustomersComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerFormComponent,
    ProductTableComponent,
    ShortenPipe,
    HighlightDirective,
    CustomerAddComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    ,RouterModule.forRoot(appRoutes)
  ],
  providers: [LoggingService, ProductsService, CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
