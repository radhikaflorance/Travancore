import {NavController, MenuController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {RemoteServiceProvider} from "../../providers/remote-service/remote-service";
import {Component} from "@angular/core";
import {MainshopPage} from "../mainshop/mainshop";
import {OffersPage} from "../offers/offers";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  about:any;
  offersList: any[];
  messages:any[];
  loadedCountryList: any;
  countries: any[];
  countriesList: any[];

  errorMessage: string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menu: MenuController,
              private remoteService : RemoteServiceProvider) {

    menu.enable(true);
    this.getmessages1();
    this.getoffer();

    this.getabout();


  }

  login() {
    this.navCtrl.push(LoginPage)
  }
  getmessages1() {
    this.remoteService.messages1()
      .subscribe(
        messages => this.messages =messages,
        error =>  this.errorMessage = <any>error);
  }

  openMenu(evt) {
    if (evt === "main") {
      this.menu.enable(true, 'menu1');
      this.menu.enable(false, 'menu2');
    } else {
      this.menu.enable(true, 'menu2');
      this.menu.enable(false, 'menu1');
    }
    this.menu.toggle();
  }
  getCountries() {
    this.remoteService.getShopLists()
      .subscribe(
        countries => this.countries = countries,


        error =>  this.errorMessage = <any>error);
    // this.countriesList=this.countries;
    //
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
  shopDetails(event,slide) {

    this.navCtrl.push(OffersPage, {
      post: slide

    });
  }
  getoffer() {
    this.remoteService.getoffer()
      .subscribe(
        offersList => this.offersList =offersList,
        error =>  this.errorMessage = <any>error);

  }
  // getmessages() {
  //   this.remoteService.messages()
  //     .subscribe(
  //       scrollmessages => this.scrollmessages =scrollmessages,
  //
  //       error =>  this.errorMessage = <any>error);
  //   console.log("TRKYTEYEY",this.scrollmessages);
  // }

  getabout() {
    this.remoteService.aboutus()
      .subscribe(
        about => this.about = about,
        error =>  this.errorMessage = <any>error);

  }

}
