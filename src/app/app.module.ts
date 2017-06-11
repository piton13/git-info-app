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
import { CommandPage } from '../pages/command/command';
import { GitInitializationPage } from '../pages/git-configuration/sub-pages/git-initialization/git-initialization';
import { GitRemoteLinkingPage } from '../pages/git-configuration/sub-pages/remote-linking/remote-linking';
import { HttpProvider } from '../providers/http/http';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    GitConfigurationPage,
    GitOperationsPage,
    CommandListPage,
    CommandPage,
    GitInitializationPage,
    GitRemoteLinkingPage
  ],
  imports: [
    HttpModule,
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
    CommandListPage,
    CommandPage,
    GitInitializationPage,
    GitRemoteLinkingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider
  ]
})
export class AppModule {}
