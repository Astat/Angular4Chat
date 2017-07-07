import {Injectable} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Beer} from './beer';

@Injectable()
export class BeerService {
    private beerRandomUrl = 'https://api.punkapi.com/v2/beers/random';
    private beersGetUrl ='https://api.punkapi.com/v2/beers';

    constructor(private http:Http){}

    getRandomBeer() : Observable<Beer>{
        return this.http.get(this.beerRandomUrl)
        .map(response => <Beer>response.json()[0])
        .do(beer => console.log('beer', beer))

        .catch(this.handleError);
    }

    findBeers(motif:string) : Observable<Beer[]>{
        return this.http.get(this.beersGetUrl+`?beer_name=${motif}`)
        .map(response => <Beer[]>response.json())
        .do(beer => console.log('beer', beer))
        .catch(this.handleError);
        
    }

    private handleError(error: any): Observable<Beer> {
        console.error('An error occurred', error); // for demo purposes only
        return Observable.empty();
    }
}
