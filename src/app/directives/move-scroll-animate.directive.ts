import { Directive, ElementRef } from '@angular/core';
import { ShareService } from 'app/share/share.service';
import { AnimateDirective } from './animate.directive';

@Directive({
    selector: '[moveScrollAnimate]'
})
export class MoveScrollAnimateDirective extends AnimateDirective {
    constructor(protected element: ElementRef, protected shareService: ShareService) {
        super(element, shareService, 'slide-in-top', 'slide-out-top');
    }
}
