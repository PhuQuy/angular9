import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeScrollAnimateDirective } from './fade-scroll-animate.directive';
import { MoveScrollAnimateDirective } from './move-scroll-animate.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FadeScrollAnimateDirective, MoveScrollAnimateDirective],
  exports: [FadeScrollAnimateDirective, MoveScrollAnimateDirective]
})
export class DirectiveModule { }
