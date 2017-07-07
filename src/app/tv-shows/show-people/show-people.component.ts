import {Component, Input, OnInit} from '@angular/core';
import {People} from "../model/people";

@Component({
  selector: 'app-show-people',
  templateUrl: './show-people.component.html',
  styleUrls: ['./show-people.component.css']
})
export class ShowPeopleComponent implements OnInit {

  @Input()
  people: People[];

  constructor() { }

  ngOnInit() {
  }

}
