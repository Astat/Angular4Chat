import {Component, Input, OnInit} from '@angular/core';
import {Show} from "../model/show";
import {TvShowsService} from "../../tv-shows.service";
import {ChatCommunicationService} from "../../chat-communication.service";
import {Message} from "../../message";
import {ChatHandlerService} from "../../chat-handler.service";

@Component({
  selector: 'app-show-displayer',
  templateUrl: './show-displayer.component.html',
  styleUrls: ['./show-displayer.component.css']
})
export class ShowDisplayerComponent implements OnInit {

  @Input()
  show: Show;

  constructor(private tvShowsService: TvShowsService,
              private chatComService: ChatCommunicationService,
              private chatHandlerService: ChatHandlerService) {
  }

  ngOnInit() {
  }

  getSeasons(show: any) {

    let message: Message = {
      author: this.chatHandlerService.me,
      text: '/tvshows ' + 'seasons ' + show.id,
      time: null
    };

    this.chatComService.sendMessage(message);


  }

  getActors(show: any) {
    let message: Message = {
      author: this.chatHandlerService.me,
      text: '/tvshows ' + 'actors ' + show.id,
      time: null
    };

    this.chatComService.sendMessage(message);
  }
}
