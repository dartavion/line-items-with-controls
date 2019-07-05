import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispatchSelectionComponent } from './dispatch-selection.component';

describe('DispatchSelectionComponent', () => {
  let component: DispatchSelectionComponent;
  let fixture: ComponentFixture<DispatchSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispatchSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispatchSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
