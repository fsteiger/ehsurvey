import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProtocolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// IonicPage()
@Component({
  selector: 'page-protocol',
  templateUrl: 'protocol.html',
})
export class ProtocolPage {

    root = 'DetailsPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProtocolPage');
  }

    // @ViewChild(Nav) nav: Nav;
  openSplit(){

  }
}
