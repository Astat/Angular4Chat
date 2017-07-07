import { Component } from '@angular/core';
import {PluginTemplateComponent} from "../plugin-template/plugin-template.component";
import {GiphyService} from "../giphy.service";
import {Gif} from "./Gif";

@Component({
  selector: 'plugin-giphy',
  templateUrl: './plugin-giphy.component.html',
  styleUrls: ['./plugin-giphy.component.css']
})
export class PluginGiphyComponent extends PluginTemplateComponent{

  private userMessage: string;
  private gifs: Gif[];

  constructor(private giphyService: GiphyService) {
    super();
  }
  process(command:string, value:string, author:string):void {
    if (command != "gif") {
      return;
    }

    this.resetView();

    let valueParams:string[] =  value.split(' ');

    let cmd:string = valueParams ? valueParams[0] : '';
    let arg:string = valueParams && valueParams.length > 1 ? valueParams[1] : '';

    switch (cmd) {
      case 'random':
      this.showRandomGif();
      break;
      case 'search':
          if(arg.length == 0){
            this.userMessage = 'search oui, mais search quoi ? (/gif search <text>)';
          }else{
            this.searchGifs(arg);
          }
        break;
      case 'trending':
        this.showTrending();
        break;
      default:
        this.userMessage = 'Essayez /gif random, /gif trending, ou /gif search <text>';
        break;
    }
    this.intercept();
  }

  private showRandomGif() {
    this.giphyService.getRandom().subscribe(g=>this.gifs = [g]);
  }


  private searchGifs(arg:string) {
    this.giphyService.search(arg).subscribe(gifs=>this.gifs = gifs);
  }

  private resetView() {
      this.userMessage = '';
      this.gifs = [];
  }
  private showTrending() {
    //noinspection TypeScriptValidateTypes
    this.giphyService.getTrending().subscribe(gifs=>this.gifs = gifs);
  }
}
