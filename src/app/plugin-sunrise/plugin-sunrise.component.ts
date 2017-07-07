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

  private loading: boolean = true;
  private sunrise: string;
  private sunset: string;
  private city: string;
  private displayShare: boolean = true;

  process(command: string, value: string, author: string) {
    if (command != "sun" && command != "sun-share" && value != '') {
      return;
    }
    if (command == 'sun-share'){
      this.displayShare = false;
      this.formatMessage(value);
      this.intercept();
    } else {
      if (author != this.chat.me) {
        this.discardMessage();
      } else {
        this.intercept();
        this.formatMessage(value);
      }

    }
  }

  share(value){
    this.chat.send("/sun-share "+value);
  }

  private searchCoord(city: string) {
    const endpoint = 'https://maps.googleapis.com/maps/api/geocode/json';
    const searchParams = new URLSearchParams();
    searchParams.set('address', city + '+CH');
    searchParams.set('key', 'AIzaSyDfgAlAH8nRsT85v8m9ggNms2tOn7rf4Ow');
    let url = endpoint + '?address=' + city + '+CH&key=AIzaSyDfgAlAH8nRsT85v8m9ggNms2tOn7rf4Ow';
    return this.http
      .get(url)
      .map(res => res.json());
  }


  private searchSunset(lat, lng) {
    const endpoint = 'https://api.sunrise-sunset.org/json?lat=' + lat + '&lng=' + lng + '&date=today';
    const searchParams = new URLSearchParams()

    return this.http
      .get(endpoint)
      .map(res => res.json());
  }

  private formatMessage(value){
    this.searchCoord(value).subscribe(coord => {
      this.city = coord.results[0].formatted_address;
      let lat = coord.results[0].geometry.location.lat;
      let lng = coord.results[0].geometry.location.lng;
      this.searchSunset(lat, lng).subscribe(result => {

        let sunriseDate = new Date();
        var arrayrise: string[] = result.results.sunrise.split(':');

        let sunsetDate = new Date();
        var arrayset = result.results.sunset.split(':');

        this.setUTCTime(sunriseDate, arrayrise);
        this.setUTCTime(sunsetDate, arrayset);

        this.sunrise = sunriseDate.toLocaleTimeString();
        this.sunset = sunsetDate.toLocaleTimeString();
        this.loading = false;
      });

    });
  }

  private setUTCTime(adate, arrayrise){
    adate.setUTCMinutes(parseInt(arrayrise[1]));
    adate.setUTCSeconds(parseInt(arrayrise[2].substring(0, 2)));
    if (arrayrise[2].substring(3,5) == 'PM'){
      adate.setUTCHours(parseInt(arrayrise[0])+12);
    } else {
      adate.setUTCHours(parseInt(arrayrise[0]));
    }
  }

}
