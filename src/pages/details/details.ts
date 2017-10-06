import { Component, ViewChild } from '@angular/core';
import { App, IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

    // @ViewChild(Nav) nav: Nav;


  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App, public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

    openStart(){
    // console.log(this.nav, 'this.nav');
    // console.log(nav, 'nav');
    //   this.navCtrl.setRoot('StartPage');
    //     this.appCtrl.getRootNav().setRoot('StartPage');
      console.log('new1');

        // this.events.publish('goHome');
        const root = this.appCtrl.getRootNav();
        root.popToRoot();
        root.setRoot("StartPage");
    }
}
