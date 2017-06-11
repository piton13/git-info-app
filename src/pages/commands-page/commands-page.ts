import { Component, Input } from '@angular/core';

@Component({
  selector: 'commands-page',
  templateUrl: 'commands-page.html'
})
export class CommandsPage {
  @Input() public pageData: any;
}
