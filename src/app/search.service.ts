import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { catchError } from 'rxjs/operators';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  baseUrl = 'https://8HDRK698YZ-1.algolia.net';

  constructor(private httpClient: HttpClient) {}

  single(objectId: string) {
    // TODO: cache from search as well
    const httpOptions = {
      headers: new HttpHeaders(environment.algoliaHeaders),
    };
    return this.httpClient.get<any>(
      `${this.baseUrl}/1/indexes/packages/${encodeURIComponent(objectId)}`,
      httpOptions,
    );
  }

  // todo: probably poorly named
  search(query: string) {
    const httpOptions = {
      params: new HttpParams().set('query', query).append('facets', '*'),
      headers: new HttpHeaders(environment.algoliaHeaders),
    };
    return this.httpClient.get<any>(
      `${this.baseUrl}/1/indexes/packages`,
      httpOptions,
    );
  }
  recent() {
    const httpOptions = {
      params: new HttpParams().set('hitsPerPage', '10').append('facets', '*'),
      headers: new HttpHeaders(environment.algoliaHeaders),
    };
    return this.httpClient.get<any>(
      `${this.baseUrl}/1/indexes/updated`,
      httpOptions,
    );
  }
  popular() {
    const httpOptions = {
      params: new HttpParams().set('hitsPerPage', '10').append('facets', '*'),
      headers: new HttpHeaders(environment.algoliaHeaders),
    };
    return this.httpClient.get<any>(
      `${this.baseUrl}/1/indexes/popularity`,
      httpOptions,
    );
  }
  tag(tag: string) {
    const httpOptions = {
      params: new HttpParams().set('tagFilters', tag).append('facets', '*'),
      headers: new HttpHeaders(environment.algoliaHeaders),
    };
    return this.httpClient.get<any>(
      `${this.baseUrl}/1/indexes/popularity`,
      httpOptions,
    );
  }
  readme(repo: string) {
    const pkg = repo.split('https://github.com/')[1];
    return this.httpClient.get(`https://api.github.com/repos/${pkg}/readme`, {
      responseType: 'text',
      headers: new HttpHeaders({
        Accept: 'application/vnd.github.html',
      }),
    });
  }

  submitPackage(pack: any) {
    return this.httpClient.post<any>(
      'https://us-central1-angular-parts.cloudfunctions.net/submitPackage',
      pack,
    );
  }
}

// curl -X POST \
//   -H "X-Algolia-API-Key: 3d9875e51fbd20c7754e65422f7ce5e1" \
//   -H "X-Algolia-Application-Id: latency" \
//   --data-binary '{ "params": "query=g&hitsPerPage=2&getRankingInfo=1" }' \
//   "https://latency-dsn.algolia.net/1/indexes/bestbuy/query"
