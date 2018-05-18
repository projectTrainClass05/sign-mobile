import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SignInPage} from "../sign-in/sign-in";
import {NoticeSPage} from "../notice-s/notice-s";

/**
 * Generated class for the StudentHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-student-home',
  templateUrl: 'student-home.html',
})
export class StudentHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentHomePage');
  }
  toSignin(){
    this.navCtrl.push(SignInPage)
  }
  toNotice(){
    this.navCtrl.push(NoticeSPage)
  }
}
