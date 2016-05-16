import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Hero } from './hero';

@Injectable()
export class HeroService {
    constructor(private http: Http) { }
    private heroesUrl = '/api/Hero';
    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    
    getHero(id: number) {
        return this.http.get(this.heroesUrl + '/' + id)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    }
}
