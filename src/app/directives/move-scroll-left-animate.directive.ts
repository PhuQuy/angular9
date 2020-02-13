import { Directive, ElementRef } from '@angular/core';
import { ShareService } from 'app/share/share.service';
import { AnimateDirective } from './animate.directive';

@Directive({
    selector: '[moveScrollLeftAnimate]'
})
export class MoveScrollLeftAnimateDirective extends AnimateDirective {
    constructor(protected element: ElementRef, protected shareService: ShareService) {
        super(element, shareService, 'slide-in-left', 'slide-out-left');
    }
}