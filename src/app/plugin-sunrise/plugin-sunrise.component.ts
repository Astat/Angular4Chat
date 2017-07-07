import {Component, OnInit} from '@angular/core';

import {PluginTemplateComponent} from '../plugin-template/plugin-template.component';
import {ChatHandlerService} from '../chat-handler.service';

@Component({
  selector: 'plugin-sunrise',
  templateUrl: './plugin-sunrise.component.html',
  styleUrls: ['./plugin-sunrise.component.css']
})
export class PluginSunriseComponent extends PluginTemplateComponent {

  constructor(private chat: ChatHandlerService) {
    super()
  }

  private write: string;

  process(command: string, value: string, author: string) {
    if (command != "sunrise") {
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
