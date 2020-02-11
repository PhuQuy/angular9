import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-top-navbar',
    templateUrl: './top-navbar.component.html',
    styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

    @Output() public sidenavToggle = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    public onToggleSidenav = () => {
        this.sidenavToggle.emit();
    }

}
