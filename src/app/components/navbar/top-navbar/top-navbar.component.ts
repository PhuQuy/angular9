import { Component, OnInit, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
    selector: 'app-top-navbar',
    templateUrl: './top-navbar.component.html',
    styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {
    isTop: boolean;
    @Output() public sidenavToggle = new EventEmitter();
    @HostListener('scroll', ['$event']) 
    scrollHandler(event) {
      console.debug("Scroll Event");
    }

    constructor() { }

    ngOnInit() {
    }

    public onToggleSidenav = () => {
        this.sidenavToggle.emit();
    }

}
