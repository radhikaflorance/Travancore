import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainshopPage } from './mainshop';

@NgModule({
  declarations: [
    MainshopPage,
  ],
  imports: [
    IonicPageModule.forChild(MainshopPage),
  ],
})
export class MainshopPageModule {}
