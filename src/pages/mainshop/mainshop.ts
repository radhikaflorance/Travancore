import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RemoteServiceProvider} from "../../providers/remote-service/remote-service";

/**
 * Generated class for the MainshopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mainshop',
  templateUrl: 'mainshop.html',
})
export class MainshopPage {
  c:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,private remoteService : RemoteServiceProvider) {
    this.c = navParams.get('post');
    console.log('Error: ', this.c);

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MainshopPage');
  }

}
