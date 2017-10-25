import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers } from '@angular/http';
import {LoginPage} from "../login/login";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  userData = { "username":"","email": "","phoneNumber":"","password":""};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http:Http) {
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  postCall()
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('https://akhillevakumar.000webhostapp.com/postdata.php',this.userData,headers)
      .map(res => res.json())
      .subscribe(res => {
        alert("success "+res);
      }, (err) => {
        alert("failed");
      });
    this.navCtrl.push(LoginPage);
  }
}
