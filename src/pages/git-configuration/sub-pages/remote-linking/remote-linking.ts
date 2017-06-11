import { Component } from '@angular/core';

@Component({
  selector: 'git-remote-linking-page',
  templateUrl: 'remote-linking.html'
})
export class GitRemoteLinkingPage {
  public commandInfo;

  constructor() {
    this.commandInfo = {
      description: 'First of all remote repository and local repository should be created. ' +
      '</br>Then copy link from remote repository and add it as origin in local repository using ' +
      'command: <span>git remote add origin @remote_url@ </span>',
      code: `
        some command
      `
    };
  }
}
