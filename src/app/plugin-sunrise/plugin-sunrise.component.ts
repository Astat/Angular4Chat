import { Component, OnInit } from '@angular/core';

import { PluginTemplateComponent } from '../plugin-template/plugin-template.component';
import { ChatHandlerService } from '../chat-handler.service';
import { Http } from "@angular/http";

@Component({
  selector: 'plugin-sunrise',
  templateUrl: './plugin-sunrise.component.html',
  styleUrls: ['./plugin-sunrise.component.css']
})
export class PluginSunriseComponent extends PluginTemplateComponent {

  constructor(private chat: ChatHandlerService, private http: Http) {
    super()
  }


  searchCoord(city: string) {

    console.log(city);
    const endpoint = 'https://maps.googleapis.com/maps/api/geocode/json';
    const searchParams = new URLSearchParams();
    searchParams.set('address', city + '+CH');
    searchParams.set('key', 'AIzaSyDfgAlAH8nRsT85v8m9ggNms2tOn7rf4Ow');

    let url = endpoint + '?address=' + city + '+CH&key=AIzaSyDfgAlAH8nRsT85v8m9ggNms2tOn7rf4Ow';

    return this.http
      .get(url)
      .map(res => res.json());
  }


  searchSunset(lat, lng) {
    const endpoint = 'https://api.sunrise-sunset.org/json?lat=' + lat + '&lng=' + lng + '&date=today';
    const searchParams = new URLSearchParams()

    return this.http
      .get(endpoint)
      .map(res => res.json());
  }


  private write: string;

  process(command: string, value: string, author: string) {
    if (command != "sun") {
      return;
    }
    let city = value;
    if (author != this.chat.me) {
      this.discardMessage();
    }
    else {
      this.searchCoord(city).subscribe(coord => {
        let lat = coord.results[0].geometry.location.lat;
        let lng = coord.results[0].geometry.location.lng;
        this.searchSunset(lat, lng).subscribe(result => {
          console.log(result);
          this.write = result.results.sunrise + " " + result.results.sunset;
        });
        this.intercept();
      });

    }


  }

}
