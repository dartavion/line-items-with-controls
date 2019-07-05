import { Component } from '@angular/core';
import { PopoverRef } from '../popover/popover-ref';

@Component({
  selector: 'app-popover-content',
  templateUrl: './popover-content.component.html',
  styleUrls: ['./popover-content.component.scss']
})
export class PopoverContentComponent {
  skills;

  constructor(private popoverRef: PopoverRef) {
    this.skills = this.popoverRef.data.skills;
  }

  close() {
    this.popoverRef.close({id: 1});
  }

}
