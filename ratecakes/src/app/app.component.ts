import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title: string;

  constructor(private _httpService: HttpService) {
    console.log('I HVAE BEEN CONSTRUCTED!!!!!!!');
  }

  ngOnInit() {
    this.title = 'rate my cakes';
  }
}
