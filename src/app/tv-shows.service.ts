import {Injectable} from "@angular/core";
import {Http, RequestOptions, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Show} from "./tv-shows/model/show";
import {People} from "./tv-shows/model/people";
import {Season} from "./tv-shows/model/season";

@Injectable()
export class TvShowsService {

  baseApi = 'http://api.tvmaze.com/';

  constructor(private http: Http) {
  }

  searchShow(query: string): Observable<Show[]> {

    let params: URLSearchParams = new URLSearchParams();
    params.set('q', query);

    let requestOptions = new RequestOptions();
    requestOptions.params = params;

    return this.http
      .get(this.baseApi + '/search/shows', requestOptions)
      .map(res => this.extractResponse(res));

  }

  searchPeople(query: string): Observable<People[]> {

    let params: URLSearchParams = new URLSearchParams();
    params.set('q', query);

    let requestOptions = new RequestOptions();
    requestOptions.params = params;

    return this.http
      .get(this.baseApi + 'search/people', requestOptions)
      .map(res => this.extractResponse(res));
  }

  getShowSeasons(showId: number): Observable<Season[]> {
    return this.http
      .get(this.baseApi + 'shows/' + showId + '/seasons')
      .map(res => this.extractResponse(res));
  }

  getShowActors(showId: number): Observable<People[]> {
    return this.http
      .get(this.baseApi + 'shows/' + showId + '/cast')
      .map(res => this.extractResponse(res));
  }

  getSeasonEpisodes(seasonId: number): Observable<any[]> {
    return this.http
      .get(this.baseApi + 'seasons/' + seasonId + '/episodes')
      .map(res => this.extractResponse(res));
  }


  private extractResponse(res: any) {
    if (res) {
      return res.json();
    }
  }
}
