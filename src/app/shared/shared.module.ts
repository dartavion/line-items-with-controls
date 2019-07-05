import { NgModule } from '@angular/core';
import { PopoverComponent } from './components/popover/popover.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { PopoverContentComponent } from './components/popover-content/popover-content.component';
import { PopoverService } from './services/popover.service';

@NgModule({
  declarations: [PopoverComponent, PopoverContentComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    OverlayModule
  ],
  exports: [PopoverComponent, PopoverContentComponent],
  entryComponents: [PopoverComponent, PopoverContentComponent],
  providers: [PopoverService]
})
export class SharedModule {
}
