import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AbnormalPage} from "../abnormal/abnormal";
import {MyClassPage} from "../my-class/my-class";

/**
 * Generated class for the StudentInfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-student-inf',
  templateUrl: 'student-inf.html',
})
export class StudentInfPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentInfPage');
  }
  toabnormal(){
    this.navCtrl.push(AbnormalPage)
  }
  tomyclass(){
    this.navCtrl.push(MyClassPage)
  }
}
