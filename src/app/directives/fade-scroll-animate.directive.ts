import { Directive, ElementRef } from '@angular/core';
import { ShareService } from 'app/share/share.service';
import { AnimateDirective } from './animate.directive';

@Directive({
    selector: '[fadeScrollAnimate]'
})
export class FadeScrollAnimateDirective extends AnimateDirective {
    constructor(protected element: ElementRef, protected shareService: ShareService) {
        super(element, shareService, 'fade-in', 'fade-out');
    }
}
