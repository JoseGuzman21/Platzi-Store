import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductsService } from "./../../../core/services/products/products.service";
import { Router } from "@angular/router";
import { MyValidators } from "./../../../utils/validators";

@Component({
  selector: "app-form-products",
  templateUrl: "./form-products.component.html",
  styleUrls: ["./form-products.component.scss"]
})
export class FormProductsComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {}

  get priceField() {
    return this.form.get("price");
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ["", [Validators.required]],
      title: ["", [Validators.required]],
      price: ["", [Validators.required, MyValidators.isPriceValid]],
      image: [""],
      description: ["", [Validators.required]]
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.value) {
      const product = this.form.value;
      this.productsService.createProduct(product).subscribe(newProduct => {
        console.log("Agregado con exito" + newProduct);
        this.router.navigate(["./admin/products"]);
      });
    }
  }
}
