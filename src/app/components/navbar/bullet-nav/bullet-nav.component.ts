import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ShareService } from 'app/share/share.service';
import { of } from 'rxjs';
import { from } from 'rxjs';
import { filter, max } from 'rxjs/operators';

@Component({
    selector: 'app-bullet-nav',
    templateUrl: './bullet-nav.component.html',
    styleUrls: ['./bullet-nav.component.scss']
})
export class BulletNavComponent implements OnInit, AfterViewInit {
    ids = [
        {
            id: 'about',
            value: 0
        },
        {
            id: 'features',
            value: 0
        },
        {
            id: 'design',
            value: 0
        },
        {
            id: 'screenshots',
            value: 0
        },
        {
            id: 'testimonials',
            value: 0
        },
        {
            id: 'get-it',
            value: 0
        }
    ];
    activeRouter;
    constructor(private shareService: ShareService) {
        this.activeRouter = this.ids[0];
    }

    ngOnInit(): void { }

    ngAfterViewInit() {
        setTimeout(() => {
            this.ids.forEach((router, index) => {
                const el = document.getElementById(router.id);
                router.value = el.offsetTop  - (index * 100);
            });
            this.shareService.offsetTop.subscribe(offsetTop => {
                from(this.ids).pipe(
                    filter(router => router.value < offsetTop),
                    max()
                ).subscribe(router => {
                    this.activeRouter = router;
                });
            });
        }, 1000);
    }

    onScroll(id) {
        setTimeout(() => {
            const el = document.getElementById(id);
            el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }

}
