import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpProvider } from '../../../../providers/http/http';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'git-initialization-page',
  templateUrl: 'git-initialization.html',
  providers: [
    HttpProvider
  ]
})
export class GitInitializationPage implements OnInit, OnDestroy {
  public pageData: { title: string, commands: Object[] };

  private loading: any;
  private subscription: any;

  constructor(private httpProvider: HttpProvider, private loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create({
      content: `<ion-spinner></ion-spinner>`
    });
  }

  ngOnInit() {
    this.loading.present();
    this.subscription = this.httpProvider.getInitializationCommands().subscribe(data => {
      this.pageData = data;
    }, error => {
      console.error('Error:' + error);
    }, () => {
      this.loading.dismiss();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
