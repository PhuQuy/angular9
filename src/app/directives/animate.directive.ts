import { AfterViewInit, ElementRef, Input, OnDestroy } from '@angular/core';
import { ShareService } from 'app/share/share.service';

export class AnimateDirective implements AfterViewInit, OnDestroy {
    animationInClass = '';
    animationOutClass = '';

    offsetTop;
    screenHeight;
    screenWidth;
    @Input() offset = 0;
    @Input() translateY = 0;
    @Input() offsetMobile = 0;
    offsetMobileLocal = 0;
    @Input() delay = 0;
    scrollEvent$;

    constructor(protected element: ElementRef, protected shareService: ShareService, animationInClass, animationOutClass) {
        this.animationInClass = animationInClass;
        this.animationOutClass = animationOutClass;
    }

    ngAfterViewInit() {
        this.screenHeight = window.screen.height * 0.6 + this.offset;
        this.scrollEvent$ = this.shareService.offsetTop.subscribe(() => {
            // this.element.nativeElement.innerHTML = this.element.nativeElement.getBoundingClientRect().top - this.screenHeight;
            if (this.delay) {
                setTimeout(() => {
                    this.updateClass();
                }, this.delay);
            } else {
                this.updateClass();
            }
        });
    }

    updateClass() {
        if (this.element.nativeElement.getBoundingClientRect().top - this.screenHeight < 0) {
            this.element.nativeElement.classList.add(this.animationInClass);
            this.element.nativeElement.classList.remove(this.animationOutClass);
        } else {
            this.element.nativeElement.classList.remove(this.animationInClass);
            this.element.nativeElement.classList.add(this.animationOutClass);
        }
    }

    ngOnDestroy() {
        // tslint:disable-next-line: no-unused-expression
        this.scrollEvent$ ? this.scrollEvent$.unsubscribe() : null;
    }
}
