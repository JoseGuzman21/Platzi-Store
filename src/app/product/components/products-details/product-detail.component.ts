import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ProductsService } from "./../../../core/services/products/products.service";
import { Product } from "../../../core/models/product.model";

@Component({
  selector: "app-products-details",
  templateUrl: "./products-details.component.html",
  styleUrls: ["./products-details.component.scss"]
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
      //this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: "25",
      title: "editado papus",
      image: "assets/images/banner-3.jpg",
      price: 3212,
      description: "nuevo producto edtado"
    };
    this.productsService.createProduct(newProduct).subscribe(product => {
      console.log(product);
    });
  }
  updateProduct() {
    const updateProduct: Partial<Product> = {
      id: "25",
      title: "editado papus",
      price: 3212
    };
    this.productsService
      .updateProduct("2", updateProduct)
      .subscribe(product => {
        console.log(product);
      });
  }
  deleteProduct(){
    this.productsService
      .deleteProduct('7')
      .subscribe(rta => {
        console.log(rta);
      });
  }
}
