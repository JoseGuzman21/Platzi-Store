import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { Product } from './../../../product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('1. constructor');
  }

  // ngOnChanges(changes: SimpleChanges) {
  // console.log('2.ngonchanges');
  // console.log(changes);
  // }

  ngOnInit() {
    console.log('2.ngOnInit');
  }

  /*ngDoCheck() {
    console.log("3. doCkech");
  }

  ngOnDestroy() {
    console.log("4. on destroy");
  }*/

  addCart() {
    console.log('anadido al carrito');
    this.productClicked.emit(this.product.id);
  }
}
