import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShareService {

    offsetTop = new BehaviorSubject(0);
    setOffsetTop(y) {
        this.offsetTop.next(y);
    }
    constructor() { }
}
