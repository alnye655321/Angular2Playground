import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import {AuthHttp} from 'angular2-jwt';
import {Auth} from '../auth.service';


@Injectable()
export class UserService {

    url: string = 'https://test.com/';
  data1: any;

  constructor(public http: Http, private authHttp: AuthHttp, public auth: Auth) {    
    //var toke = localStorage.getItem('id_token');
    console.log(localStorage.getItem('auth_id'));
    console.log(auth);

    //this.userAuthObj = auth.user;
    //this.authId = this.userAuthObj.user_id.substring(6); //remove auth0 header
    
  }



  //get worker data by hotel
  getUsers(id) {
    // Dont have the data yet
    return new Promise(resolve => {
      this.authHttp.get(this.url + id)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  
}