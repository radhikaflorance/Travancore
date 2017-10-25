import { Component, ViewChild } from '@angular/core';
import {Nav, Platform,NavController,NavParams} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import {RemoteServiceProvider} from "../providers/remote-service/remote-service";
import {ListPage} from "../pages/list/list";
import {QrPage} from "../pages/qr/qr";
import {LoginPage} from "../pages/login/login";
import {ParkingPage} from "../pages/parking/parking";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  title: any[];
  errorMessage: string;
  @ViewChild(Nav) nav: Nav;
  @ViewChild(NavParams) navParams: NavParams;
  @ViewChild(NavController) navCrl: NavController;
  username:any;
  userData:any;
  menu1:any;
  rootPage: any = HomePage;

  constructor(public platform: Platform, public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public remoteService:RemoteServiceProvider) {

    this.initializeApp();
    this. getmenu1();

  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      console.log(this.userData);

    });
  }
  menu()
  {
    this.nav.push(HomePage);
  }
  cmenu()
  {
    this.nav.push(ListPage);
  }
  ccmenu()
  {
    this.nav.push(QrPage);
  }
  menuu()
  {
    this.nav.push(LoginPage);

  }
  parking()
  {


    this.nav.push(ParkingPage);
  }
  Login()
  {
    this.nav.push(LoginPage);
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  getmenu1() {
    this.remoteService.menu1()
      .subscribe(
        menu1 => this.menu1 = menu1,
        error =>  this.errorMessage = <any>error);
    // console.log(this.title);
  }


}
