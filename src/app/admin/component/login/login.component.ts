import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.buildForm();
  }

  ngOnInit() {}
  get userField() {
    return this.formLogin.get("user");
  }
  get passwordField() {
    return this.formLogin.get("password");
  }

  private buildForm() {
    this.formLogin = this.formBuilder.group({
      user: ["", [Validators.required]],
      password: ["", [Validators.required]]
    });
  }

  testLogin(event: Event) {
    event.preventDefault();
    if (this.formLogin.value) {
      const product = this.formLogin.value;
      this.router.navigate(["./admin/products"]);
    }
  }
  goRegister(event: Event){
    event.preventDefault();
    this.router.navigate(["./admin/register"]);
  }
}
