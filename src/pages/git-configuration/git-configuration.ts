import { Component } from '@angular/core';
import { GitInitializationPage } from './sub-pages/git-initialization/git-initialization';
import { GitRemoteLinkingPage } from './sub-pages/remote-linking/remote-linking';

@Component({
  selector: 'git-configuration-page',
  templateUrl: 'git-configuration.html'
})
export class GitConfigurationPage {
  public listData: { title: string, items: Array<{ title: string, note: string, class: any }> };

  constructor() {
    this.listData = {
      title: '',
      items: [{
        title: 'Git initialization',
        note: 'This is a ',
        class: GitInitializationPage
      }, {
        title: 'Local/Remote linking',
        note: 'There ',
        class: GitRemoteLinkingPage
      }]
    };
  }
}
