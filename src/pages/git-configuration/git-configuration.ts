import { Component } from '@angular/core';

@Component({
  selector: 'git-configuration-page',
  templateUrl: 'git-configuration.html'
})
export class GitConfigurationPage {
  public items: Array<{ title: string, note: string/*, class: any*/ }>;

  constructor() {
    this.items = [{
      title: 'Git initialization',
      note: 'This is a ',
      // class: OperationWithBranch
    }, {
      title: 'Local/Remote linking',
      note: 'There ',
      // class: OperationWithBranch
    }];
  }
}
