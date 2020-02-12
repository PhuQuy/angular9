import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular9';

  @HostListener("window:scroll", ['$event'])
  scrollMe(event) {
    console.log("scrolerl");
    
  }
}
