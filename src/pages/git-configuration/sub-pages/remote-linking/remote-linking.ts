import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpProvider } from '../../../../providers/http/http';

@Component({
  selector: 'git-remote-linking-page',
  templateUrl: 'remote-linking.html'
})
export class GitRemoteLinkingPage implements OnInit, OnDestroy {
  public pageData: { title: string, commands: Object[]};
  private subscription: any;

  constructor(private httpProvider: HttpProvider) {}

  ngOnInit() {
    this.subscription = this.httpProvider.getRemoteLinkingCommands().subscribe(data => {
      this.pageData = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
