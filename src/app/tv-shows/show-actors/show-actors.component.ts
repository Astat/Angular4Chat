import {Component, Input, OnInit} from '@angular/core';
import {People} from "../model/people";

@Component({
  selector: 'app-show-actors',
  templateUrl: './show-actors.component.html',
  styleUrls: ['./show-actors.component.css']
})
export class ShowActorsComponent implements OnInit {

  @Input()
  people: People[];

  constructor() {
  }

  ngOnInit() {
  }

}
