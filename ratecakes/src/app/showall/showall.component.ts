import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent implements OnInit {
  allcakes: any[];

  constructor(private _httpService: HttpService) {
    console.log('all cakes constructor!');

  }
  ngOnInit() {
    this.getAllCakes();
    this._httpService.newCakeSubject.subscribe(
      data => this.allcakes.push(data));
  }

  getAllCakes() {
    console.log('get all cakes!!!!!!!');
    const obs = this._httpService.showall();
    obs.subscribe(data => {
      this.allcakes = data['data'];
      console.log(this.allcakes);
    });
  }
  deletecake(id) {
    console.log('delete cake!!!!!!!');
    const obs = this._httpService.deletecake(id);
    obs.subscribe(data => data['data']);
    this.getAllCakes();
  }

}
