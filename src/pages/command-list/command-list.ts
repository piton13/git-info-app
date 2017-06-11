import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'command-list',
  templateUrl: 'command-list.html'
})
export class CommandListPage {
  @Input() public listData: Object[];

  constructor(public navCtrl: NavController) {}

  itemTapped(event, item) {
    if (!item.class) {
      return;
    }
    this.navCtrl.push(item.class);
  }
}
