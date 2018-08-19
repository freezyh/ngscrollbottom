import { Component, OnInit, HostListener} from '@angular/core';
import { Observable, fromEvent} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  flag = false;
  ngOnInit(): void {
    fromEvent(window, 'scroll').subscribe((event) => {
      const h = document.documentElement.clientHeight;
      const H = document.body.clientHeight;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (h + scrollTop >= H) {
        if (!this.flag) {
          console.log('可视区底部');
          console.log(h);
          console.log(scrollTop);
          console.log(H);
        }
        this.flag = true;
      } else {
        this.flag = false;
      }
    });

  }
}
