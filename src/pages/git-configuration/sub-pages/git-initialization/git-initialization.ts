import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpProvider } from '../../../../providers/http/http';

@Component({
  selector: 'git-initialization-page',
  templateUrl: 'git-initialization.html',
  providers: [
    HttpProvider
  ]
})
export class GitInitializationPage implements OnInit, OnDestroy {
  public pageData: { title: string, commands: Object[] };

  private subscription: any;

  constructor(private httpProvider: HttpProvider) {}

  ngOnInit() {
    this.subscription = this.httpProvider.getInitializationCommands().subscribe(data => {
      this.pageData = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
