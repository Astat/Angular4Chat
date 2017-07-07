import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-displayer',
  templateUrl: './image-displayer.component.html',
  styleUrls: ['./image-displayer.component.css']
})
export class ImageDisplayerComponent implements OnInit {

  @Input()
  src: string;

  @Input()
  alt: string;

  constructor() {
  }

  ngOnInit() {
  }

}
