import { Component, OnInit } from "@angular/core";
import { ProductsService } from "./../../../core/services/products/products.service";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"]
})
export class ProductsListComponent implements OnInit {
  products = [];
  displayedColumns: string[] = ["id", "title", "price", "actions"];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.fecthProducts();
  }

  fecthProducts() {
    this.productsService.getAllProductos().subscribe(products => {
      this.products = products;
      console.log(products);
    });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe(rta => {
      console.log("eliminado con exito" + rta);
      this.fecthProducts();
    });
  }
}
