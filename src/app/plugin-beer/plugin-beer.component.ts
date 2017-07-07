import {Component, OnInit} from '@angular/core';

import {PluginTemplateComponent} from '../plugin-template/plugin-template.component';
import {ChatHandlerService} from '../chat-handler.service';
import {BeerService} from './beer.service';
import {Beer} from './beer';

@Component({
  selector: 'plugin-beer',
  templateUrl: './plugin-beer.component.html',
  styleUrls: ['./plugin-beer.component.css']
})
export class PluginBeerComponent extends PluginTemplateComponent {

  constructor(private chat: ChatHandlerService, private beerService:BeerService) {
    super()
  }

  private write: string;
  beer: Beer;

  process(command: string, value: string, author: string) {
    if (command != "beer") {
      return;
    }
    this.beerService.getRandomBeer().subscribe(beer=> this.beer=beer);
    this.intercept();
  }

}