import { Component, EventEmitter, forwardRef, Input, OnInit, Output, TemplateRef } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup, NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator
} from '@angular/forms';
import { CartItem } from '../../models/cart-item';
import { PopoverService } from '../../../shared/services/popover.service';
import { PopoverRef } from '../../../shared/components/popover/popover-ref';

@Component({
  selector: 'app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CartListItemComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CartListItemComponent),
      multi: true
    }
  ]
})
export class CartListItemComponent implements ControlValueAccessor, Validator {
  private popoverRef: PopoverRef;

  @Input()
  index: number;

  @Input()
  item: CartItem;

  @Input()
  formGroup: FormGroup;

  @Input()
  amountFormControl: FormControl;

  @Output() remove: EventEmitter<number> = new EventEmitter<number>();
  @Output() openModal: EventEmitter<void> = new EventEmitter<void>();

  constructor(private popover: PopoverService) {
  }

  show(content: TemplateRef<any>, origin) {
    this.popoverRef = this.popover.open({
      content,
      origin,
      data: {
        skills: [1, 2, 3]
      }
    });
    this.popoverRef.afterClosed$.subscribe(res => {
      console.log(res);
    });
  }

  onRemove() {
    this.popoverRef.close();
    this.remove.emit(this.index);
  }

  onOpenModal() {
    this.popoverRef.close();
    this.openModal.emit();
  }
  public onTouched: () => void = () => {};

  registerOnChange(fn: any): void {
    console.log('registerOnChange', fn);
    this.formGroup.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    console.log('registerOnTouched', fn);
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    console.log('setDisabledState', isDisabled);
    isDisabled ? this.formGroup.disable() : this.formGroup.enable();
  }

  writeValue(obj: any): void {
    console.log('writeValue', obj);
  }

  registerOnValidatorChange(fn: () => void): void {
    console.log('registerOnValidatorChange', fn);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    console.log('validate', control);
    return this.formGroup.valid ? null : { invalidForm: {valid: false, message: 'Address fields are invalid'}};
  }
}
