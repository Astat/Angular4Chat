import { Injectable } from '@angular/core';
import { ChuckMessage } from './chuck-message';
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";

@Injectable()
export class ChucknorrisService {

  constructor(private httpService: Http) {}


  public sendRandom(): Observable<ChuckMessage> {
    return this.httpService
      .get('https://api.chucknorris.io/jokes/random')
      .map(this.extractData);
  }

  private extractData(res: Response): ChuckMessage {
    const body = res.json();
    return body;
  }
}
