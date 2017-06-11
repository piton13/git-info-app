import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpProvider } from '../../../../providers/http/http';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'git-remote-linking-page',
  templateUrl: 'remote-linking.html'
})
export class GitRemoteLinkingPage implements OnInit, OnDestroy {
  public pageData: { title: string, commands: Object[]};
  private loading: any;
  private subscription: any;

  constructor(private httpProvider: HttpProvider, private loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create({
      content: `<ion-spinner></ion-spinner>`
    });
  }

  ngOnInit() {
    this.loading.present();
    this.subscription = this.httpProvider.getRemoteLinkingCommands().subscribe(data => {
      this.pageData = data;
    }, err => {
      console.error('Error: ' + err);
    }, () => {
      this.loading.dismiss();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
