import { Component } from '@angular/core';

@Component({
  selector: 'git-initialization-page',
  templateUrl: 'git-initialization.html'
})
export class GitInitializationPage {
  public commandInfo;

  constructor() {
    this.commandInfo = {
      description: 'To initialize git in the current local directory use following command:',
      code: `
        \`\`\`bash
        $ git init
        \`\`\`
      `
    };
  }
}
