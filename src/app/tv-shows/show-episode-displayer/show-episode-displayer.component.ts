import {Component, Input, OnInit} from '@angular/core';
import {Episode} from "../model/episode";

@Component({
  selector: 'app-show-episode-displayer',
  templateUrl: './show-episode-displayer.component.html',
  styleUrls: ['./show-episode-displayer.component.css']
})
export class ShowEpisodeDisplayerComponent implements OnInit {

  @Input()
  episode: Episode;

  constructor() { }

  ngOnInit() {
  }

}
