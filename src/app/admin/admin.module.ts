import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './component/product-form/product-form.component';
import { MaterialModule } from './../material/material.module';
import { NavComponent } from './component/nav/nav.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ListaComponent } from './component/lista/lista.component';
import { ProductsListComponent } from './component/products-list/products-list.component';
import { OrdernesProductsComponent } from './component/ordernes-products/ordernes-products.component';
import { FormProductsComponent } from './component/form-products/form-products.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';



@NgModule({
  declarations: [ProductFormComponent, NavComponent, DashboardComponent, ListaComponent, ProductsListComponent, OrdernesProductsComponent, FormProductsComponent, LoginComponent, RegisterComponent, ProductEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
  ]
})
export class AdminModule { }
