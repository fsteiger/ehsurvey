import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { ProtocolPage } from '../protocol/protocol';

/**
 * Generated class for the ProtocolsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// IonicPage()
@Component({
  selector: 'page-protocols',
  templateUrl: 'protocols.html',
})
export class ProtocolsPage {
   root = 'NewsPage';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProtocolsPage');
  }

}
