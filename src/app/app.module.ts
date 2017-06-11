import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GitConfigurationPage } from '../pages/git-configuration/git-configuration';
import { GitOperationsPage } from '../pages/git-operations/git-operations';
import { CommandListPage } from '../pages/command-list/command-list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GitConfigurationPage,
    GitOperationsPage,
    CommandListPage
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
    GitConfigurationPage,
    GitOperationsPage,
    CommandListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
