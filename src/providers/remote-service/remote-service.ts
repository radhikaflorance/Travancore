import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import 'rxjs/add/operator/catch';
import {Observable} from "rxjs/Observable";


/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {
  data:any;



  constructor(public http: Http) {
    console.log('Hello RemoteServiceProvider Provider');
  }
  getShopLists(): Observable<string[]> {
    return this.http.get("http://192.168.1.160:8080/The_wrapper_app2_MOT/webservices/shoplist.jsp")
      .map(this.extractData)
      .catch(this.handleError);
  }
  getoffer(): Observable<string[]> {
    return this.http.get("http://192.168.1.160:8080/The_wrapper_app2_MOT/webservices/offer_icons.jsp")
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    return Observable.throw(errMsg);
  }

  public getOffer(): Observable<string[]> {
    return this.http.get("http://192.168.1.160:8080/The_wrapper_app2_MOT/webservices/offer_icons.jsp")
      .map(this.extractData)
      .catch(this.handleError);
  }
  aboutus(): Observable<string[]> {
    return this.http.get("http://192.168.1.160:8080/The_wrapper_app2_MOT/webservices/aboutus.jsp")
      .map(this.extractData)
      .catch(this.handleError);
  }
  sidemenu(): Observable<string[]> {
    return this.http.get("https://akhillevakumar.000webhostapp.com/data.php")
      .map(this.extractData)
      .catch(this.handleError);
  }
  messages1(): Observable<string[]> {
    return this.http.get("https://akhillevakumar.000webhostapp.com/message.php")
      .map(this.extractData)
      .catch(this.handleError);
  }

  menu1(): Observable<string[]> {
    return this.http.get("https://akhillevakumar.000webhostapp.com/menu1.php")
      .map(this.extractData)
      .catch(this.handleError);
  }

}
