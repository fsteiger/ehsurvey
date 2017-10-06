import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ProtocolPage } from '../protocol/protocol';

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

    pages: Array<{title: string, component: any}>;

    rootPage: any = 'HomePage';

    constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
        // this.menu.enable(false, 'menuRoot');
      this.pages = [
          { title: 'Home', component: HomePage },
          { title: 'Protocol', component: ProtocolPage }
      ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
    this.rootPage = 'HomePage';
  }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // this.rootPage = page.component;
        this.navCtrl.setRoot(page.component);
    }

}
