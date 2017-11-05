import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpService } from './http.service';

@Injectable()
export class DataService {

  serverBasePath: string = "http://localhost:5000";

  constructor(private http: HttpService) {
   }

  registration (data) {
    return this.http.post(this.serverBasePath + "/api/User",data).
    map(res =>res.json());
  }

  getUsers () {
    return this.http.get(this.serverBasePath + "/api/User").
    map(res =>res.json());
  }



}
