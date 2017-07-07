import {Component, OnInit} from '@angular/core';

import {PluginTemplateComponent} from '../plugin-template/plugin-template.component'
import {MathService} from '../math.service';
import {MathResponse} from '../math-response';

@Component({
  selector: 'plugin-math',
  templateUrl: './plugin-math.component.html',
  styleUrls: ['./plugin-math.component.css']
})
export class PluginMathComponent extends PluginTemplateComponent {


  constructor(private mathService:MathService) {
    super()
  }

  // IHM values
  public query: string
  public response: string
  public error: string
  public help: boolean
  public about: boolean;
  public ok: boolean;


  process(command: string, value: string, author: string) {
    this.response=null;
    if (command != "math") {
      return;
    }

    // Service call
    this.mathService.query(value).subscribe(v=> {
      // Note: sauver l'objet en this provoque des erreurs en cascade lorsque d'autres personnes envoient des messages
      // je pense que le div [[hidden]] du html n'empêche pas les expressions de s'évaluer... quoique même avec des nullchecks,
      // ça ne passe pas.
      this.query = v.query;
      this.response = v.response;
      this.error = v.error;
      this.help = v.help;
      this.about = v.about;
      this.ok = v.ok;

      // Little joke
      if (value=="Chuck Norris") this.response="Don't ask !";
      if (value=="beer") this.response="Not in my mood !";
      if (value=="meteo") this.response="Too hot to answer !";      
    });
    
    this.intercept();
  }

}