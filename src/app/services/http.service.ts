import {Injectable} from '@angular/core';
import {Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class HttpService extends Http {

  private route:Router;

  constructor (backend: XHRBackend, options: RequestOptions) {
    let token = localStorage.getItem('accessToken'); // your custom token getter function here
    options.headers.set('Authorization', `Bearer ${token}`);
    super(backend, options);
  }

  request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
    let token = localStorage.getItem('accessToken');
    if (typeof url === 'string') { // meaning we have to add the token to the options, not in url
      if (!options) {
        // let's make option object
        options = {headers: new Headers()};
      }
      options.headers.set('Authorization', `Bearer ${token}`);
    } else {
    // we have to add the token to the url object
      url.headers.set('Authorization', `Bearer ${token}`);
    }
    return super.request(url, options).catch(this.catchAuthError(this));
  }

  private catchAuthError (self: HttpService) {
    // we have to pass HttpService's own instance here as `self`
    console.log();
    return (res: Response) => {
        console.log(res);
      if (res.status === 401) {
         this.route.navigate(['/login'])
      }else if(res.status==403){
        this.route.navigate(['/routine'])
      }
      return Observable.throw(res);
    };
  }

}