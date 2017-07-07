import { Component, OnInit } from '@angular/core';
import {PluginTemplateComponent} from "../plugin-template/plugin-template.component";
import {GiphyService} from "../giphy.service";

@Component({
  selector: 'plugin-giphy',
  templateUrl: './plugin-giphy.component.html',
  styleUrls: ['./plugin-giphy.component.css']
})
export class PluginGiphyComponent extends PluginTemplateComponent{

  private texte: string;
  private url: string;

  constructor(private giphyService: GiphyService) {
    super();
  }
  process(command:string, value:string, author:string):void {
    if (command != "gif") {
      return;
    }
console.log(value);
    switch (value) {
      case 'random':
        this.showRandomGif();
        break;
      default:
        this.texte = 'Essayez /gif random';
        break;
    }
    this.intercept();
  }

  private showRandomGif() {
    this.giphyService.getRandom().subscribe(g=>this.url = g.url);
  }


}
