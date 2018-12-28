import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-viewcake',
  templateUrl: './viewcake.component.html',
  styleUrls: ['./viewcake.component.css']
})

export class ViewcakeComponent implements OnInit  {
  cake: any;

  constructor(private _httpService: HttpService) {
    console.log('view cake constructor!');

  }
  ngOnInit() {
    this.cake = {type: '', baker: ''};
  }

  viewCake() {
    console.log('view cake!!!!!!!');
    const obs = this._httpService.show(this.cake);
    obs.subscribe(data => {
      console.log(data);
    });
    this.cake = {type: '', baker: ''};
  }
}
