import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {StudentHomePage} from "../student-home/student-home";
import {LeavePage} from "../leave/leave";
import {StudentInfPage} from "../student-inf/student-inf";

/**
 * Generated class for the Tabs1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs1',
  templateUrl: 'tabs1.html',
})
export class Tabs1Page {
  tab1Root = StudentHomePage;
  tab2Root = LeavePage;
  tab3Root = StudentInfPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs1Page');
  }

}
