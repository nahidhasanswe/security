import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userList: any;

  constructor(private service: DataService) {
    service.getUsers().subscribe(result => {
      this.userList = result;
    })
   }

  ngOnInit() {
  }

}
