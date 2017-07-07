import {Component, Input, OnInit} from '@angular/core';
import {Season} from "../model/season";
import {TvShowsService} from "../../tv-shows.service";
import {Message} from "../../message";
import {ChatHandlerService} from "../../chat-handler.service";
import {ChatCommunicationService} from "../../chat-communication.service";

@Component({
  selector: 'app-show-season-displayer',
  templateUrl: './show-season-displayer.component.html',
  styleUrls: ['./show-season-displayer.component.css']
})
export class ShowSeasonDisplayerComponent implements OnInit {

  @Input()
  season: Season;

  constructor(private chatHandlerService: ChatHandlerService,
              private chatComService: ChatCommunicationService) {
  }

  ngOnInit() {
  }

  getEpisodes(id: number) {
    let message: Message = {
      author: this.chatHandlerService.me,
      text: '/tvshows ' + 'episodes ' + id,
      time: null
    };

    this.chatComService.sendMessage(message);
  }
}
