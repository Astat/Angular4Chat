import { Component, OnInit } from '@angular/core';
import {PluginTemplateComponent} from "../plugin-template/plugin-template.component";
import {ChucknorrisService} from "../chucknorris.service";

@Component({
  selector: 'plugin-chuck',
  templateUrl: './plugin-chuck.component.html',
  styleUrls: ['./plugin-chuck.component.css']
})
export class PluginChuckComponent extends PluginTemplateComponent {

  constructor(private chucknorrisService: ChucknorrisService) {
    super()
  }

  private write: string;
  private icon: string;

  process(command: string, value: string, author: string) {
    if (command != "chuck") {
      return;
    }

    this.chucknorrisService.sendRandom().subscribe(m => {
      this.write = m.value;
      this.icon = m.icon_url
    });
    this.intercept();

  }
}
