import {Component, Input, OnInit} from '@angular/core';
import {Search} from "../model/search";
import {Show} from "../model/show";

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})
export class ShowSearchComponent implements OnInit {

  @Input()
  shows: Show[];

  @Input()
  query: string;

  constructor() { }

  ngOnInit() {

  }

}
