import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdernesProductsComponent } from './ordernes-products.component';

describe('OrdernesProductsComponent', () => {
  let component: OrdernesProductsComponent;
  let fixture: ComponentFixture<OrdernesProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdernesProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdernesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
