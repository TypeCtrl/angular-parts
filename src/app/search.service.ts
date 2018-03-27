import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class SearchService {
  baseUrl = 'https://ofcncog2cu-3.algolianet.com';
  constructor(private httpClient: HttpClient) {}

  search() {
    return this.httpClient.get(`${this.baseUrl}/1/indexes/*/queries`);
  }
}



// curl -X POST \
//   -H "X-Algolia-API-Key: 3d9875e51fbd20c7754e65422f7ce5e1" \
//   -H "X-Algolia-Application-Id: latency" \
//   --data-binary '{ "params": "query=g&hitsPerPage=2&getRankingInfo=1" }' \
//   "https://latency-dsn.algolia.net/1/indexes/bestbuy/query"
