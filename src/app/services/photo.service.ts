import { Injectable } from '@angular/core';

//IP global
import { GLOBAL } from './global';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { map } from 'rxjs/operator/map';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public url: String;

  constructor(
    private _http: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  conectarImagenes(word){
    let url = this.url + '?key=13119377-fc7e10c6305a7de49da6ecb25' +'&category='+word;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(url).map(
      (resp: any)  => {
        return resp;
    });
  }

  BuscarXPalabra(word) {
    let url = this.url + '?key=13119377-fc7e10c6305a7de49da6ecb25' + '&lang=es&q=' + word;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(url).map(
      (resp: any) => {
        return resp;
      });
  }


}
