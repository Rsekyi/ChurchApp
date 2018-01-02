import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChurchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-church',
  templateUrl: 'church.html',
})
export class ChurchPage {
tab1:any;
tab2:any;
tab3:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.tab1="RegisterPage";
  this.tab2="MembershipPage";
  this.tab3="SearchPage";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChurchPage');
  }

}
