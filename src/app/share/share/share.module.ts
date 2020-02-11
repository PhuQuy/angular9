import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconsModule } from '../fa-icons/fa-icons.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FaIconsModule
  ],
  exports: [FaIconsModule]
})
export class ShareModule { }
