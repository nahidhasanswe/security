import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageNumber: number = 1 ;

  setPageNumber(number) {
    if(number == 1)
      window.location.reload();
    this.pageNumber = number;
  }
}
