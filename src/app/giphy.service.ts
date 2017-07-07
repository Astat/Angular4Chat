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
        .map(this.extractMultipleGifs).catch(this.handleError);

  }

  saveFavorite(user :string, gif : Gif){
    this.getFavorites(user).subscribe((favs) => {
      favs.push(gif);
      localStorage.setItem(user, JSON.stringify(favs))
    });
  }

  getFavorites(user :string) : Observable<Gif[]> {
    return Observable.create(observer => {
      let favs = localStorage.getItem(user);
      if (!favs){
        observer.next([]);
      }else{
        observer.next(JSON.parse(favs));
      }
      observer.complete();
    });
  }

  deleteFavorite(user :string, gif : Gif) : Observable<Gif[]> {
    return Observable.create(observer => {
      this.getFavorites(user).subscribe((favs) => {
        //noinspection TypeScriptValidateTypes
        let index = favs.findIndex(g => g.url == gif.url);
        debugger
        console.log(favs.length);
        favs = favs.splice(index, 1);
        console.log(favs.length);
        localStorage.setItem(user, JSON.stringify(favs));

        observer.next(gif);
        observer.complete();
      });
    });
  }

  private extractSingleGif(res: Response) : Gif {
    let body = res.json();
    return new Gif(body.data.fixed_height_small_url);
  }


  private extractMultipleGifs(res: Response) : Gif[] {
    let gifs:Gif[] = [];
    for(let gifInfo of res.json().data){
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
