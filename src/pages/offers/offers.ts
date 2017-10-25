import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RemoteServiceProvider} from "../../providers/remote-service/remote-service";
/**
 * Generated class for the OffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offers',
  templateUrl: 'offers.html',
})
export class OffersPage {
  countries: any[];
  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public remoteService:RemoteServiceProvider) {
    this.getoffer();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffersPage');
  }
  getoffer() {
    this.remoteService.getoffer()
      .subscribe(
        countries => this.countries = countries,
        error =>  this.errorMessage = <any>error);
  }
}
