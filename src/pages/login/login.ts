import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {StudentHomePage} from "../student-home/student-home";
import {RegisterPage} from "../register/register";
import {ForgotPasswordPage} from "../forgot-password/forgot-password";
import {TeacherHomePage} from "../teacher-home/teacher-home";
import {ListPage} from "../list/list";
import {Tabs1Page} from "../tabs1/tabs1";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  toStudent(){
    this.navCtrl.push(Tabs1Page)
  }
  toRegister(){
    this.navCtrl.push(RegisterPage)
  }
  toForgotPassword(){
    this.navCtrl.push(ForgotPasswordPage)
  }
}
