import { Component, OnInit, EventEmitter, Output, HostListener } from '@angular/core';
import { ShareService } from 'app/share/share.service';

@Component({
    selector: 'app-top-navbar',
    templateUrl: './top-navbar.component.html',
    styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {
    isTop;
    activeRouter;
    @Output() public sidenavToggle = new EventEmitter();
    constructor(private shareService: ShareService) { }

    ngOnInit() {
        this.shareService.offsetTop.subscribe(offsetTop => {
            this.isTop = offsetTop == null ? null : offsetTop > 0;
        });

        this.shareService.activeRouter.subscribe(activeRouter => {
            this.activeRouter = activeRouter;
            console.log(activeRouter);
            
        });
    }

    public onToggleSidenav = () => {
        this.sidenavToggle.emit();
    }

    onScroll(id) {
        setTimeout(() => {
            const el = document.getElementById(id);
            el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
}
