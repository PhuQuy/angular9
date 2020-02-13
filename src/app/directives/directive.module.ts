import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeScrollAnimateDirective } from './fade-scroll-animate.directive';
import { MoveScrollAnimateDirective } from './move-scroll-animate.directive';
import { MoveScrollRightAnimateDirective } from './move-scroll-right-animate.directive';
import { MoveScrollLeftAnimateDirective } from './move-scroll-left-animate.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [FadeScrollAnimateDirective, MoveScrollAnimateDirective, MoveScrollRightAnimateDirective, MoveScrollLeftAnimateDirective],
    exports: [FadeScrollAnimateDirective, MoveScrollAnimateDirective, MoveScrollRightAnimateDirective, MoveScrollLeftAnimateDirective]
})
export class DirectiveModule { }
