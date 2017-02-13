import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  private mod: any = {};
  private images: any = [];

  constructor(private http: Http) { }

  getJson() {
    this.http.get('tsconfig.json').
    subscribe(
      (omaMuuttuja: Response) => {
      const json = omaMuuttuja.json();
      this.mod = json.compilerOptions;
      console.log(this.mod);
      }
    );
  }
  fetchData() {
    this.http.get('http://media.mw.metropolia.fi/wbma/media').
    subscribe(
      (omaMuuttuja: Response) => {
      const json = omaMuuttuja.json();
      console.log(this.images);
      this.images = json;
      }
    );
}


  ngOnInit() {
     this.getJson();
     this.fetchData();
  }

}
