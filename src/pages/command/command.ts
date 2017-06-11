import { Component, Input } from '@angular/core';

@Component({
  selector: 'command-page',
  templateUrl: 'command.html'
})
export class CommandPage {
  @Input() public commandInfo: any;
}
