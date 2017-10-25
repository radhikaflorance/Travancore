import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {NgxQRCodeModule} from "ngx-qrcode2";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {QrPage} from "../pages/qr/qr";
import {MainshopPage} from "../pages/mainshop/mainshop";
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';
import {HttpModule} from "@angular/http";
import {OffersPage} from "../pages/offers/offers";
import {AboutPage} from "../pages/about/about";
import {SignupPage} from "../pages/signup/signup";
import {ParkingPage} from "../pages/parking/parking";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,QrPage,MainshopPage,OffersPage,
    AboutPage,SignupPage,
    ParkingPage
  ],
  imports: [
    BrowserModule,NgxQRCodeModule,
    IonicModule.forRoot(MyApp),HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,QrPage,MainshopPage,
    OffersPage,
    AboutPage,
    SignupPage,
    ParkingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteServiceProvider
  ]
})
export class AppModule {}
