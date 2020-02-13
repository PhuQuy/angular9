import { Component, OnInit } from '@angular/core';
import { ShareService } from 'app/share/share.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ImageViewerComponent } from '@components/image-viewer/image-viewer.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    imageOverlay = false;
    images = [
        {
            src: 'http://d169hzb81ub7u3.cloudfront.net/landing/wp-content/uploads/sites/10/2014/11/app-p-01.jpg'
        },
        {
            src: 'http://d169hzb81ub7u3.cloudfront.net/landing/wp-content/uploads/sites/10/2014/11/app-p-02.jpg'
        },
        {
            src: 'http://d169hzb81ub7u3.cloudfront.net/landing/wp-content/uploads/sites/10/2014/11/app-p-03.jpg'
        },
        {
            src: 'http://d169hzb81ub7u3.cloudfront.net/landing/wp-content/uploads/sites/10/2014/11/app-p-04.jpg'
        },
        {
            src: 'http://d169hzb81ub7u3.cloudfront.net/landing/wp-content/uploads/sites/10/2014/11/app-p-05.jpg'
        },
        {
            src: 'http://d169hzb81ub7u3.cloudfront.net/landing/wp-content/uploads/sites/10/2014/11/app-p-06.jpg'
        },
    ]
    constructor(private shareService: ShareService, public dialog: MatDialog) { }

    ngOnInit(): void {
        window.addEventListener('scroll', this.scrollEvent, true);
    }

    scrollEvent = (event: any): void => {
        this.shareService.setOffsetTop(event.target.scrollTop);
    }

    openImgViewer(image) {
        const dialogRef = this.dialog.open(ImageViewerComponent, {
            height: '85vh',
            width: '50vh',
            data: image.src
        });
    }
}
