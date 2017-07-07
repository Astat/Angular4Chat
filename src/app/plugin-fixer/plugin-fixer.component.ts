
import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import {PluginTemplateComponent} from '../plugin-template/plugin-template.component'


@Component({
  selector: 'plugin-fixer',
  templateUrl: './plugin-fixer.component.html',
  styleUrls: ['./plugin-fixer.component.css']
})


export class PluginFixerComponent extends PluginTemplateComponent  {

  private base: string = "EUR";
  private symbol: string = "None";
  private rate : string  = "x.xx";
  private write: string = "Try '/fixer list'";

  //   Latest rate: {{symbol}}/{{base}} : {{rate}}


  constructor(private http: Http)  {
    super();
   }

  process(command: string, value: string, author: string) {
    if (command != "fixer") {
      return;
    }
    //this.symbol = value.slice(0, value.indexOf(" "));

    if(value == "list") {
      this.list();
    } else if(value) {
      let symbol = value;
      this.symbol = symbol;
      this.latest(symbol);
    }

    this.intercept();
  }

  list() {
     this.http.get("http://api.fixer.io/latest").
       subscribe(response => {
         let json: Fixer = response.json();
         this.write ="List of symbols:"
         for(let key in json.rates) {
            this.write = this.write +  " " + key;
         }
       });
   
  }
 
  latest(symbol : string) {
     this.http.get("http://api.fixer.io/latest").
       subscribe(response => {
         let json: Fixer = response.json();
         let date = json.date;
         this.base  = json.base ;
         this.rate = json.rates[symbol];

         this.write = `Latest rate (${date}): ${symbol}/${this.base} = ${this.rate} `;

       });
   
  }
}

 class Fixer {
    base : string;
    date : string;
    rates: any;
  } 
