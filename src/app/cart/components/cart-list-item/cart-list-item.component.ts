import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartItem } from '../../models/cart-item';
import { PopoverService } from '../../../shared/services/popover.service';
import { PopoverRef } from '../../../shared/components/popover/popover-ref';

@Component({
  selector: 'app-cart-list-item',
  templateUrl: './cart-list-item.component.html',
  styleUrls: ['./cart-list-item.component.scss']
})
export class CartListItemComponent {
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
}
