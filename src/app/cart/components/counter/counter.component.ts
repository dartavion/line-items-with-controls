import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input()
  count: number;

  @Input()
  control: FormControl;

  @Output()
  onDecrement: EventEmitter<number> = new EventEmitter();

  @Output()
  onIncrement: EventEmitter<number> = new EventEmitter();
  @ViewChild('counter', {static: true}) myPalComponent: ElementRef<HTMLPalTextInputElement>;

  constructor() {
    
  }

  ngOnInit() {
    
  }
  

  // async someAction() {
  //     await this.myPalComponent.nativeElement.getAttribute('');
  // }

  counterChange(event) {
    console.log(event);
  }

  increment(control: FormControl) {
    console.log(control.value + 1);
    this.onIncrement.emit(control.value + 1);
  }

  decrement(control: FormControl) {
    console.log(control.value - 1);
    this.onDecrement.emit(control.value - 1);
  }
}
