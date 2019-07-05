import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CartItem } from '../models/cart-item';

@Injectable()
export class CartFormConfigService {

  constructor(private fb: FormBuilder) {
  }

  getConfig(cartItems: CartItem[]): FormGroup {
    return this.fb.group({
      cartItems: this.mapToCartItems(cartItems)
    });
  }

  private mapToCartItems(data: CartItem[]): FormArray {
    return this.fb.array(data.map((i) => {
      return this.fb.group({
        fulfillment: '',
        amount: 0
      });
    }));
  }
}
