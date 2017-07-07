import {Component, Input, OnInit} from '@angular/core';
import {Episode} from "../model/episode";

@Component({
  selector: 'app-show-episodes',
  templateUrl: './show-episodes.component.html',
  styleUrls: ['./show-episodes.component.css']
})
export class ShowEpisodesComponent implements OnInit {

  @Input()
  episodes: Episode[];

  constructor() {
  }

  ngOnInit() {
  }

}
