import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'command-list',
  templateUrl: 'command-list.html'
})
export class CommandListPage {
  @Input() public items: Object[];

  constructor(public navCtrl: NavController) {}

  itemTapped(event, item) {
    this.navCtrl.push(item.class);
  }
}
