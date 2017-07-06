import {Component, OnInit} from '@angular/core';

import {ChatHandlerService} from '../chat-handler.service'
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './disconnected-view.component.html',
  styleUrls: ['./disconnected-view.component.css']
})
export class DisconnectedViewComponent implements OnInit {

  private name: string = '';
  private sub: any;

  constructor(private chatService: ChatHandlerService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.name = params['pseudo'];
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  get redirectPath() {
      return '/login/' + (this.name ? this.name : '');
  }

}
