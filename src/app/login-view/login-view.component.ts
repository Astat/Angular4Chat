import {Component, OnInit} from '@angular/core';

import {ChatHandlerService} from '../chat-handler.service'
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  private name: string = '';
  private sub: any;

  constructor(private chatService: ChatHandlerService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.chatService.connected().subscribe(connected => {
      if (connected) {
        this.router.navigate(['/chat/', this.name]);
      }
    })
    this.sub = this.route.params.subscribe(params => {
       this.name = params['pseudo'];
       if(this.name) {
         this.connect();
       }
    });
  }

  private connect() {
    if (!this.name) {
      return;
    }
    this.chatService.connect(this.name);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
