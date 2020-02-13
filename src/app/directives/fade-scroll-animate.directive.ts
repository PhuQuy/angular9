import { Directive, ElementRef, AfterViewInit, Input, HostListener } from '@angular/core';
import { ShareService } from 'app/share/share.service';

@Directive({
    selector: '[fadeScrollAnimate]'
})
export class FadeScrollAnimateDirective implements AfterViewInit {
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
        this.screenHeight = window.screen.height * 0.6 + this.offset;
        console.log(this.offset ? this.offset : '')
        this.shareService.offsetTop.subscribe(data => {
            // this.element.nativeElement.innerHTML = this.element.nativeElement.getBoundingClientRect().top - this.screenHeight;

            if (this.element.nativeElement.getBoundingClientRect().top - this.screenHeight < 0) {
                this.element.nativeElement.classList.add('fade-in');
                this.element.nativeElement.classList.remove('fade-out');
            } else {
                this.element.nativeElement.classList.remove('fade-in');
                this.element.nativeElement.classList.add('fade-out');
            }
        });
    }
}
