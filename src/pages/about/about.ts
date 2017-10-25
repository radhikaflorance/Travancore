 import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RemoteServiceProvider} from "../../providers/remote-service/remote-service";

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  about: any[];
  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public remoteService:RemoteServiceProvider) {
    this.getabout();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }
  getabout() {
    this.remoteService.aboutus()
      .subscribe(
        about => this.about = about,
        error =>  this.errorMessage = <any>error);
  }
}
