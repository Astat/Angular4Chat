import { Injectable } from '@angular/core';
import { ChuckMessage } from './chuck-message';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

@Injectable()
export class ChucknorrisService {

  private url: string = 'https://api.chucknorris.io/jokes/';

  constructor(private httpService: Http) {}

  sendRandom(): Observable<ChuckMessage> {
    return this.httpService
      .get(this.url + 'random')
      .map(this.extractData)
      .catch(this.fail);
  }

  private extractData(res: Response): ChuckMessage {
    return res.json();
  }

  private extractDatas(res: Response): ChuckMessage {
    let data:any = res.json();
    console.log(data);
    if(data.total > 0){
      return data.result[0];
    }
    return null;
  }

  private fail(err: Response): Observable<any> {
    console.log(err);
    let details = err.json();
    return Observable.throw(details);
  }

  sendCategories(): Observable<string[]> {
    return this.httpService
      .get(this.url + 'categories')
      .map(m => {
        console.log(m);
        let array: string[] = m.json();
        return array;
      });
  }

  sendCategory(att: string) {
    return this.httpService
      .get(this.url + 'random?category=' + att)
      .map(this.extractData)
      .catch(this.fail);
  }

  sendQuery(att: string) {
    return this.httpService
      .get(this.url + 'search?query=' + att)
      .map(this.extractDatas)
      .catch(this.fail);
  }
}
