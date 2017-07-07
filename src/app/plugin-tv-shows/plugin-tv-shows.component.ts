import {Component} from "@angular/core";
import {PluginTemplateComponent} from "../plugin-template/plugin-template.component";
import {TvShowsService} from "../tv-shows.service";
import {Show} from "../tv-shows/model/show";
import {People} from "../tv-shows/model/people";
import {Season} from "../tv-shows/model/season";
import {Episode} from "../tv-shows/model/episode";

@Component({
  selector: 'app-plugin-tv-shows',
  templateUrl: './plugin-tv-shows.component.html',
  styleUrls: ['./plugin-tv-shows.component.css']
})
export class PluginTvShowsComponent extends PluginTemplateComponent {

  Functionality = Functionality;

  functionality: Functionality;
  shows: Show[];
  people: People[];
  seasons: Season[];
  episodes: Episode[];
  query: string;

  error = false;

  constructor(private tvShowsService: TvShowsService) {
    super();
  }

  process(command: string, value: string, author: string) {

    if (command.toLocaleLowerCase() !== "tvshows") {
      return;
    }

    let functionality = this.switchFunctionality(value.slice(0, value.indexOf(" ")));

    let content = value.slice(value.indexOf(" ") + 1);

    switch (functionality) {
      case Functionality.SHOW_SEARCH:

        if (content) {
          this.tvShowsService.searchShow(content).subscribe((result: Show[]) => {
            this.shows = result;
            this.query = content;
          })
        }

        break;

      case Functionality.PEOPLE:

        if (content) {
          this.tvShowsService.searchPeople(content).subscribe((result: People[]) => {
            this.people = result;
          })
        }

        break;

      case Functionality.ACTORS:

        if (content) {
          this.tvShowsService.getShowActors(+content).subscribe((result: People[]) => {
            this.people = result;
          })
        }

        break;

      case Functionality.SEASONS:

        if (content) {
          this.tvShowsService.getShowSeasons(+content).subscribe((res: Season[]) => {
            this.seasons = res;
          });
        }

        break;

      case Functionality.EPISODES:

        if (content) {
          this.tvShowsService.getSeasonEpisodes(+content).subscribe((res: Episode[]) => {
            this.episodes = res;
          });
        }

        break;
    }

    this.functionality = functionality;
    this.intercept();
  }

  private switchFunctionality(functionality: string): Functionality {

    if (!functionality) {
      return Functionality.HELP;
    }

    switch (functionality.toLocaleLowerCase()) {
      case 'search':
        return Functionality.SHOW_SEARCH;

      case 'people':
        return Functionality.PEOPLE;

      case 'seasons':
        return Functionality.SEASONS;

      case 'actors':
        return Functionality.ACTORS;

        case 'episodes':
        return Functionality.EPISODES;

      default:
        return Functionality.HELP;
    }

  }
}

enum Functionality {
  EPISODES,
  ACTORS,
  PEOPLE,
  SHOW_SEARCH,
  SEASONS,
  HELP
}
