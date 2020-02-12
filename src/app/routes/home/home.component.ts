import { Component, OnInit } from '@angular/core';
import { ShareService } from 'app/share/share.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    imageOverlay = false;

    constructor(private shareService: ShareService) { }

    ngOnInit(): void {
        window.addEventListener('scroll', this.scrollEvent, true);
    }

    scrollEvent = (event: any): void => {
        this.shareService.setOffsetTop(event.target.scrollTop);
    }

}
