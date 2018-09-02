import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular'
import {LibraryPage} from '../library/library'
import {FavoritesPage} from '../favorites/favorites'


@IonicPage()
@Component({
  selector: 'page-tabs',
  template: 
  `
  <ion-tabs>
      <ion-tab [root]="librarypage" tabTitle="Library" tabIcon="book"> </ion-tab>
      <ion-tab [root]="favoritespage" tabTitle="Favorites" tabIcon="star"> </ion-tab>
  </ion-tabs>
  `
})
export class TabsPage {
  librarypage = LibraryPage;
  favoritespage = FavoritesPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
