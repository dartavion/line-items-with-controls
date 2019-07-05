import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dispatch-selection',
  templateUrl: './dispatch-selection.component.html',
  styleUrls: ['./dispatch-selection.component.scss']
})
export class DispatchSelectionComponent implements OnInit {
  @Input()
  controlName;

  @Input()
  group: FormGroup;

  fulfillment: string;

  fulfillmentTypes: string[] = ['willCall', 'delivery'];
  constructor() { }

  ngOnInit() {
  }

}
