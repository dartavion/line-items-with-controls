import { Component, forwardRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CartItem } from '../../models/cart-item';
import { CartFormConfigService } from '../../services/cart-form-config.service';
import { ModalContentComponent } from '../../../markdown/components/modal-content/modal-content.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @ViewChild('markdownModal', {static: true}) markdownModal: ModalContentComponent;
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

  getCartItem(index: number): CartItem {
    return this.cartItems[index];
  }

  getAmount(item: AbstractControl) {
    return item.get('amount') as FormControl;
  }

  onRemove(index: number) {
    this.removeCartItem(index);
  }

  onOpenModal() {
    this.markdownModal.openDialog();
  }
}
