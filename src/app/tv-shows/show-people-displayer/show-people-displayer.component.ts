import {Component, Input, OnInit} from '@angular/core';
import {People} from "../model/people";

@Component({
  selector: 'app-show-people-displayer',
  templateUrl: './show-people-displayer.component.html',
  styleUrls: ['./show-people-displayer.component.css']
})
export class ShowPeopleDisplayerComponent implements OnInit {

  @Input()
  people: People;

  @Input()
  displayCharacter = false;

  constructor() {
  }

  ngOnInit() {
  }

}
