import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShareService {

    offsetTop = new BehaviorSubject(null);
    setOffsetTop(y) {
        this.offsetTop.next(y);
    }
    constructor() { }
}
