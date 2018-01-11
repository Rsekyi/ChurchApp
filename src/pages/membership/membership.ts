import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MembershipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-membership',
  templateUrl: 'membership.html',
})
export class MembershipPage {

  constructor(private storage: Storage) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembershipPage');
  }

}
