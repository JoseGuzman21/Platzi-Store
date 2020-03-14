import { Component, OnInit } from "@angular/core";
import { Product } from "../../../core/models/product.model";
import { ProductsService } from "./../../../core/services/products/products.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductsService) {}

  products: Product[] = [];

  ngOnInit() {
    this.fecthProducts();
  }
  clickProduct(id: number) {
    console.log("el id es " + id);
  }
  fecthProducts() {
    this.productService.getAllProductos().subscribe(products => {
      this.products = products;
    });
  }
}
