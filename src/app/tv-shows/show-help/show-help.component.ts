import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-show-help',
  templateUrl: './show-help.component.html',
  styleUrls: ['./show-help.component.css']
})
export class ShowHelpComponent implements OnInit {

  commands: { command: string, description: string, howto: string, example: string }[] = [];

  constructor() {
  }

  ngOnInit() {

    let help = {
      command: 'help',
      description: 'Affiche l\'aide du plugin',
      howto: '/tvshows help',
      example: '/tvshows help'
    };

    let search = {
      command: 'search',
      description: 'Effectue une recherche dans la liste des séries',
      howto: '/tvshows search {nom de la série}',
      example: '/tvshows search game of throne'
    };

    let people = {
      command: 'people',
      description: 'Effectue une recherche dans la liste des acteurs',
      howto: '/tvshows people {nom de l\'acteur}',
      example: '/tvshows people james bond'
    };

    let seasons = {
      command: 'seasons',
      description: 'Retourne les saisons d\'une série par son id',
      howto: '/tvshows seasons {identifiant de la série}',
      example: '/tvshows seasons 1'
    };

    let actors = {
      command: 'actors',
      description: 'Retourne les acteurs d\'une série par son id',
      howto: '/tvshows actors {identifiant de la série}',
      example: '/tvshows actors 1'
    };

    this.commands.push(help);
    this.commands.push(search);
    this.commands.push(people);
    this.commands.push(seasons);
    this.commands.push(actors);

  }

}
