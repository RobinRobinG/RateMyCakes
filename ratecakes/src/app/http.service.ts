import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  newCakeSubject = new Subject<any>();
  // data = this.dataSource.asObservable();

  constructor(private _http: HttpClient) {
    console.log('hitting service');
    this.showall();
  }

  // show all cake
  showall() {
    console.log('hitting show all cakes service');
    return this._http.get('/cakes');
  }
  // show one cake
  show(id) {
    console.log('hitting show cake service');
    return this._http.get('/cakes/' + id);
  }
  // add one cake
  addcake(data) {
    console.log(data + 'hitting add cake service');
    this.newCakeSubject.next(data);
    return this._http.post('/cakes/new', data);
  }
  // update one cake
  updatecake(id, data) {
    console.log('hitting update cake service');
    return this._http.post('/cakes/' + id, data);
  }
  // delete a cake
  deletecake(id) {
    console.log('hitting delete cake service');
    return this._http.delete('/cakes/' + id);
  }
  // add one cake
  addreview(id, data) {
    console.log('hitting add review service');
    return this._http.post('/cakes/' + id + '/review', data);
  }
  // update one cake
  updatereview(id, data) {
    console.log('hitting update review service');
    return this._http.post('/cakes/review/' + id, data);
  }
  // delete a review
  deletereview(id) {
    console.log('hitting delete review service');
    return this._http.delete('/cakes/review/' + id);
  }
}
