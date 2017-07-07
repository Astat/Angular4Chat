import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { MathResponse} from './math-response';

/** Service de résolution mathématique, faisant appel à newton.now.sh */
@Injectable()
export class MathService {

  
  private baseUrl: string = 'https://newton.now.sh';
  private supportedVerbs=['simplify', 'factor', 'derive', 'integrate', 'zeroes', 'tangent', 
      'area', 'cos', 'sin', 'tan', 'arccos', 'arcsin', 'arctan', 'abs', 'log'];

  constructor(private http : Http) { }

  /**
   * query
   */
  public query(query:string):Observable<MathResponse> {
    let url = null;
    let token0 = query.split(" ")[0];

    // Retourner l'aide
    if (query=="help" || query.length==0 || token0=="help") {
      return Observable.create(observer=>{
        observer.next(MathResponse.buildHelp());
        observer.complete();
      });
    }

    // Retourner la boute
    if (token0=="about") {      
      return Observable.create(observer=>{
        observer.next(MathResponse.buildAbout());
        observer.complete();
      });
    }

    // Requête supportée, ou 'factor' par défaut
    if (this.supportedVerbs.includes(token0)) {
      url=`${this.baseUrl}/${token0}/${query.substr(token0.length+1)}`;
    } else {
      url=`${this.baseUrl}/factor/${query}`;
    }
    

    // Appel et retour
    console.log(`Calling ${url}`);
    let result = this.http
      .get(url)      
      .map((_response: Response) => {
        let obj = _response.json()
        if (obj.error) return MathResponse.buildKo(query, obj.error);
        return MathResponse.buildOk(`${obj.operation} ${obj.expression}`, obj.result);
      });
      return result;
  }

}
