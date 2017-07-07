import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import {Gif} from "./plugin-giphy/Gif";



const API_KEY:string = 'a1a08d1173b0436486faba223f4cc08a';

@Injectable()
export class GiphyService {

  private URL:string = 'http://api.giphy.com/v1/gifs';
  private SEARCH_LIMIT: number = 5;

  constructor(private http : Http){

  }

  getRandom(): Observable<Gif>{
    //noinspection TypeScriptValidateTypes
    return  this.http.get(`${this.URL}/random?api_key=${API_KEY}`)
        .map(this.extractSingleGif).catch(this.handleError);

  }

  search(searchTerm :string): Observable<Gif[]>{
    //noinspection TypeScriptValidateTypes
    return  this.http.get(`${this.URL}/search?api_key=${API_KEY}&q=${searchTerm}&limit=${this.SEARCH_LIMIT}`)
        .map(this.extractMutlipleGifs).catch(this.handleError);

  }

  private extractSingleGif(res: Response) {
    let body = res.json();
    return new Gif(body.data.fixed_height_small_url);
  }


  private extractMutlipleGifs(res: Response) {
    let gifInfos:any[] = res.json().data;
    let gifs:Gif[] = [];

    for(let gifInfo of gifInfos){

      gifs.push(new Gif(gifInfo.images.fixed_height_small.url));
    }

    return gifs;
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
