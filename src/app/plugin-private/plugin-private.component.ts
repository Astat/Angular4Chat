import {Component, OnInit} from '@angular/core';

import {PluginTemplateComponent} from '../plugin-template/plugin-template.component';
import {ChatHandlerService} from '../chat-handler.service';

@Component({
  selector: 'plugin-private',
  templateUrl: './plugin-private.component.html',
  styleUrls: ['./plugin-private.component.css']
})
export class PluginPrivateComponent extends PluginTemplateComponent {

  constructor(private chat: ChatHandlerService) {
    super()
  }

  private write: string;

  process(command: string, value: string, author: string) {
    if (command != "private") {
      return;
    }
    let target = value.slice(0, value.indexOf(" "));
    let content = value.slice(value.indexOf(" ") + 1);
    if(target == this.chat.me) {
      this.write = content;
      this.intercept();
    } else {
      this.discardMessage();
    }
  }

}