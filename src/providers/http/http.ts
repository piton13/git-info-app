import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }

  getInitializationCommands() {
    return this.http.get(`assets/json-data/initialization.json`)
      .map(res => res.json());
  }

  getRemoteLinkingCommands() {
    return this.http.get(`assets/json-data/remote-linking.json`)
      .map(res => res.json());
  }

}
