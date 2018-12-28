import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-submitcake',
  templateUrl: './submitcake.component.html',
  styleUrls: ['./submitcake.component.css']
})

export class SubmitcakeComponent implements OnInit  {
  cake: any;

  constructor(private _httpService: HttpService) {
    console.log('I HVAE BEEN CONSTRUCTED!!!!!!!');
  }

  ngOnInit() {
    this.cake = {type: '', baker: ''};
  }

  submitCake() {
    console.log('submit cake!!!!!!!');
    const obs = this._httpService.addcake(this.cake);
    obs.subscribe(data => {
      console.log(data);
    });
    this.cake = {type: '', baker: ''};
  }
}
