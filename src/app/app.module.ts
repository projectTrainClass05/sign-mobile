import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {LoginPageModule} from "../pages/login/login.module";
import {StudentHomePage} from "../pages/student-home/student-home";
import {RegisterPage} from "../pages/register/register";
import {ForgotPasswordPage} from "../pages/forgot-password/forgot-password";
import {TeacherHomePage} from "../pages/teacher-home/teacher-home";
import {SignInPage} from "../pages/sign-in/sign-in";
import {StudentInfPage} from "../pages/student-inf/student-inf";
import {LeavePage} from "../pages/leave/leave";
import {NoticeSPage} from "../pages/notice-s/notice-s";
import {Tabs1Page} from "../pages/tabs1/tabs1";
import {MyClassPage} from "../pages/my-class/my-class";
import {AbnormalPage} from "../pages/abnormal/abnormal";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    StudentHomePage,
    RegisterPage,
    ForgotPasswordPage,
    TeacherHomePage,
    SignInPage,
    StudentInfPage,
    LeavePage,
    NoticeSPage,
    Tabs1Page,
    MyClassPage,
    AbnormalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    StudentHomePage,
    RegisterPage,
    ForgotPasswordPage,
    TeacherHomePage,
    SignInPage,
    StudentInfPage,
    LeavePage,
    NoticeSPage,
    Tabs1Page,
    MyClassPage,
    AbnormalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
