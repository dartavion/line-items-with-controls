import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CartItem } from '../../models/cart-item';
import { CartFormConfigService } from '../../services/cart-form-config.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartForm: FormGroup;
  cartItems: CartItem[] = [];

  constructor(
    private fb: FormBuilder,
    private cartFormConfigService: CartFormConfigService
  ) {
    this.cartForm = this.cartFormConfigService.getConfig(this.cartItems);
  }

  ngOnInit() {
    this.addCartItem({
      id: 1,
      description: 'foo',
      fulfillment: 'delivery',
      amount: 2
    });
    this.addCartItem({
      id: 2,
      description: 'baz',
      fulfillment: 'willCall',
      amount: 1
    });
    this.addCartItem({
      id: 3,
      description: 'zaa',
      fulfillment: 'delivery',
      amount: 23
    });
  }

  private get cartFormItems() {
    return this.cartForm.get('cartItems') as FormArray;
  }

  public addCartItem(item: CartItem) {
    this.cartItems.push(item);
    this.cartFormItems.push(this.fb.group(item));
  }

  public removeCartItem(index: number) {
    this.cartItems.splice(index, 1);
    this.cartFormItems.removeAt(index);
  }

  getAmount(item: AbstractControl) {
    return item.get('amount');
  }

  onRemove(index: number) {
    this.removeCartItem(index);
  }
}
