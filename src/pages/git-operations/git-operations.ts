import { Component } from '@angular/core';

@Component({
  selector: 'git-operations-page',
  templateUrl: 'git-operations.html'
})
export class GitOperationsPage {
  public listData: { title: string, items: Array<{ title: string, note: string/*, class: any*/ }> };

  constructor() {
    this.listData = {
      title: 'Git operations',
      items: [{
        title: 'Operations with a branch',
        note: 'This is a branch operations',
        // class: OperationWithBranch
      }, {
        title: 'Operations with branches',
        note: 'There are branch operations',
        // class: OperationWithBranch
      }, {
        title: 'Operations with remote branches',
        note: 'There are remote branch operations',
        // class: OperationWithBranch
      }]
    };
  }
}
