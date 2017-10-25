import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {QrPage} from "../qr/qr";
import {MainshopPage} from "../mainshop/mainshop";
import {RemoteServiceProvider} from "../../providers/remote-service/remote-service";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  loadedCountryList: any;
  countries: any[];
  countriesList: any[];
  errorMessage: string;
  pet:string;
  shoplist:any;

  offers: any[];




  constructor(private remoteService : RemoteServiceProvider,public navCtrl: NavController, public navParams: NavParams){
    //this.getPosts();
    this.getoffer();
    this.pet = "kittens"
  }
  ionViewDidLoad() {
    this.getCountries();
  }

  getCountries() {
    this.remoteService.getShopLists()
      .subscribe(
        countries => this.countries = countries,


        error =>  this.errorMessage = <any>error);
    // this.countriesList=this.countries;
  //
  }

  shopDetails(event,c){

    this.navCtrl.push(MainshopPage, {
      post: c

    });
  }
  initializeItems() {
    this.countries = this.countries;


    this.loadedCountryList = this.countries;
  }
  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;


    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }

    this.countries = this.countries.filter((v) => {

      if(v.name && q) {
        if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {

          return true;
        }

        return false;
      }

    });


    console.log(q, this.countries.length);

  }
  onClear(searchbar)
  {
    console.log("CANCEL","cancel");
    this.getCountries();
    // $event.stopPropagation();
  }

  getoffer() {
    this.remoteService.getoffer()
      .subscribe(
        offers => this.offers = offers,
        error =>  this.errorMessage = <any>error);
  }
}
