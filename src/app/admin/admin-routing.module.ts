import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductFormComponent } from "./component/product-form/product-form.component";
import { NavComponent } from "./component/nav/nav.component";
import { ListaComponent } from "./component/lista/lista.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { ProductsListComponent } from "./component/products-list/products-list.component";
import { OrdernesProductsComponent } from "./component/ordernes-products/ordernes-products.component";
import { FormProductsComponent } from "./component/form-products/form-products.component";
import { LoginComponent } from "./component/login/login.component";
import { RegisterComponent } from "./component/register/register.component";
import { ProductEditComponent } from "./component/product-edit/product-edit.component";

const routes: Routes = [
  {
    path: "",
    component: NavComponent,
    children: [
      {
        path: "create",
        component: ProductFormComponent
      },
      {
        path: "lista",
        component: ListaComponent
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "products",
        component: ProductsListComponent
      },
      {
        path: "ordenes",
        component: OrdernesProductsComponent
      },
      {
        path: "products/create",
        component: FormProductsComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path: "products/edit/:id",
        component: ProductEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
