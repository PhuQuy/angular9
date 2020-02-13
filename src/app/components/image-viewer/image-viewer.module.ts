import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewerComponent } from './image-viewer.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [ImageViewerComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class ImageViewerModule { }
