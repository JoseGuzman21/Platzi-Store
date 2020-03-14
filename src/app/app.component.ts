import { Component } from '@angular/core';
import { Product } from './core/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';

  item = ['Jose', 'Armando', 'Guzman'];

  objeto = {};

  power = this;
  addItem() {
    this.item.push(this.title);
  }

  deleteItem(index: number) {
    this.item.splice(index, 1);
  }

}
