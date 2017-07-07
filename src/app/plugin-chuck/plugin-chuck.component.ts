import {Component, EventEmitter, Output} from '@angular/core';
import {PluginTemplateComponent} from '../plugin-template/plugin-template.component';
import {ChucknorrisService} from '../chucknorris.service';
import {ChatHandlerService} from '../chat-handler.service';
import {debug} from 'util';

@Component({
  selector: 'plugin-chuck',
  templateUrl: './plugin-chuck.component.html',
  styleUrls: ['./plugin-chuck.component.css']
})
export class PluginChuckComponent extends PluginTemplateComponent {

  constructor(private chucknorrisService: ChucknorrisService, private chat: ChatHandlerService) {
    super()
  }

  private write: string;
  private icon: string;
  private info: string;
  private categories: string[];

  process(command: string, value: string, author: string) {
    if (command != 'chuck') {
      return;
    }
    let spaces: number = value.indexOf(' ');
    let sub: string = (spaces != -1) ? value.slice(0, spaces) : value;
    let att: string = (spaces != -1) ? value.slice(spaces + 1) : null;

    if (!sub || sub == 'random') {
      this.random();
    } else {
      if (sub == 'categories') {
        if (author == this.chat.me) {
          this.callCategories();
        } else {
          this.discardMessage();
        }

      } else {
        if (sub == 'category' && att != null) {
          this.category(att);
        } else {
          if (sub == 'query' && att != null) {
            this.query(att);
          } else {
            this.help();
          }
        }
      }
    }


    this.intercept();
  }

  private random() {
    this.chucknorrisService.sendRandom().subscribe(m => {
      this.write = m.value;
      this.icon = m.icon_url;
    });
  }

  private category(att: string) {
    this.chucknorrisService.sendCategory(att).subscribe(m => {
      this.write = m.value;
      this.icon = m.icon_url
    });
  }

  private query(att: string) {
    this.chucknorrisService.sendQuery(att).subscribe(m => {
      if(m != null){
        this.write = m.value;
        this.icon = m.icon_url;
      } else {
        this.info = 'Pas de résultat, pour l\'aide entrez \'help\'';
      }
    });
  }

  private help() {
    this.info = 'Utilisation ....';
  }

  private callCategories() {
    this.chucknorrisService.sendCategories().subscribe(m => {
      this.categories = m;
    });

  }

}
