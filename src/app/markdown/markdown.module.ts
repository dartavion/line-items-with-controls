import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownFormComponent, ModalContentComponent } from './components/modal-content/modal-content.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ModalContentComponent, MarkdownFormComponent],
  exports: [
    ModalContentComponent
  ],
  entryComponents: [
    ModalContentComponent,
    MarkdownFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class MarkdownModule { }
