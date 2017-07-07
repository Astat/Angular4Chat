import { Component } from '@angular/core';
import {PluginTemplateComponent} from "../plugin-template/plugin-template.component";
import {GiphyService} from "../giphy.service";
import {Gif} from "./Gif";
import {ChatHandlerService} from "../chat-handler.service";

@Component({
  selector: 'plugin-giphy',
  templateUrl: './plugin-giphy.component.html',
  styleUrls: ['./plugin-giphy.component.css']
})
export class PluginGiphyComponent extends PluginTemplateComponent{

  private userMessage: string;
  private gifs: Gif[];
  private favMode : boolean = false;

  constructor(private giphyService: GiphyService, private chatService : ChatHandlerService) {
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

    this.favMode = false;

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
      case 'favs':
        this.showFavorites(author);
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

  private saveInFavorites(gif : Gif){
    this.giphyService.saveFavorite(this.chatService.me, gif);
    this.userMessage = 'saved !';
  }

  private showFavorites(author : string) {
    this.favMode = true;
    this.giphyService.getFavorites(author).subscribe((favs) =>  {
      this.gifs = favs;
      if(this.gifs.length == 0){
        this.userMessage = 'Pas encore de favoris ? essaye "/gif trending"'
      }
    });
  }

  private deleteFromFavorites(gif :Gif){
    const me = this.chatService.me;
    this.giphyService.deleteFavorite(me, gif).subscribe(() =>  {
      this.userMessage = 'OK !';
      this.showFavorites(me);
    });
  }
}
