import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http, Headers } from '@angular/http';
import {MyApp} from "../../app/app.component";
import {SignupPage} from "../signup/signup";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userData = { "username":"","password": ""};
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  postCall()
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(this.userData);

    this.http.post('http://localhost/login.php',this.userData,headers)
      .map(res => res.json())
      .subscribe(res => {
        alert("success "+res);
      }, (err) => {
        alert("failed");
      });
    this.navCtrl.push(MyApp, {
      post: this.userData});
  }
  signUp(){
    this.navCtrl.push(SignupPage);
  }
}
