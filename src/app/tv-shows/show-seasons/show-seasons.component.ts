import {Component, Input, OnInit} from '@angular/core';
import {Season} from "../model/season";

@Component({
  selector: 'app-show-seasons',
  templateUrl: './show-seasons.component.html',
  styleUrls: ['./show-seasons.component.css']
})
export class ShowSeasonsComponent implements OnInit {

  @Input()
  seasons: Season[];

  constructor() {
  }

  ngOnInit() {
  }

}
