import { Directive, ElementRef, AfterViewInit, Input, HostListener } from '@angular/core';
import { ShareService } from 'app/share/share.service';

@Directive({
    selector: '[moveScrollAnimate]'
})
export class MoveScrollAnimateDirective implements AfterViewInit {
    offsetTop;
    screenHeight;
    screenWidth;
    @Input() offset: number = 0;
    @Input() translateY: number = 0;
    @Input() offsetMobile: number = 0;
    offsetMobileLocal = 0;

    constructor(private element: ElementRef, private shareService: ShareService) {
    }
    
    ngAfterViewInit() {
        this.screenHeight = window.screen.height * 0.6 + this.offset + 100;
        this.shareService.offsetTop.subscribe(data => {
            // this.element.nativeElement.innerHTML = this.element.nativeElement.getBoundingClientRect().top - this.screenHeight;
            const offsetTop = this.element.nativeElement.getBoundingClientRect().top - this.screenHeight;
            if (offsetTop < 0) {
                this.element.nativeElement.classList.add('slide-in-top');
                this.element.nativeElement.classList.remove('slide-out-top');
            } else {
                this.element.nativeElement.classList.remove('slide-in-top');
                this.element.nativeElement.classList.add('slide-out-top');
            }
        });

    }
}
