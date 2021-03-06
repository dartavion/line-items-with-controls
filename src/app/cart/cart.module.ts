import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './containers/cart/cart.component';
import { CartListItemComponent } from './components/cart-list-item/cart-list-item.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CounterComponent } from './components/counter/counter.component';
import { DispatchSelectionComponent } from './components/dispatch-selection/dispatch-selection.component';
import { CartFormConfigService } from './services/cart-form-config.service';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MarkdownModule } from '../markdown/markdown.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    MarkdownModule
  ],
  declarations: [
    CartComponent,
    CartListItemComponent,
    CounterComponent,
    DispatchSelectionComponent
  ],

  providers: [
    CartFormConfigService
  ],
  entryComponents: [
    CartComponent,
    CartListItemComponent
  ],
  exports: [
    CartComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CartModule { }
