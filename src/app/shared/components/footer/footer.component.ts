import { Component, OnInit } from "@angular/core";
import { FormControl, Validators,FormGroupDirective,NgForm } from "@angular/forms";
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  emailField: FormControl;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor() {
    this.emailField = new FormControl("",[
      Validators.minLength(4),
      Validators.maxLength(10),
      Validators.required
    ]);
    //this.emailField.valueChanges.subscribe(value => {
    //  console.log(value);
    //});
    // this.emailField.valueChanges
    // .subscribe(value => {
    //   console.log(value);
    // });
  }

  ngOnInit() {}
  matcher = new MyErrorStateMatcher();
  sendMail() {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }
}
