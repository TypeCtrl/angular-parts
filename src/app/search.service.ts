import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class SearchService {
  baseUrl = 'https://8HDRK698YZ-1.algolia.net';
  constructor(private httpClient: HttpClient) {}

  search(query: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Algolia-API-Key': '178381a2875a1d2958e062acb2b59fab',
        'X-Algolia-Application-Id': '8HDRK698YZ',
      }),
    };
    return this.httpClient.get<any>(
      `${this.baseUrl}/1/indexes/packages`,
      httpOptions,
    );
  }
  readme(repo?: string) {
    return this.httpClient.get(
      'https://api.github.com/repos/ng-bootstrap/ng-bootstrap/readme',
      {
        responseType: 'text',
        headers: new HttpHeaders({
          Accept: 'application/vnd.github.html',
        }),
      },
    );
  }
}

// curl -X POST \
//   -H "X-Algolia-API-Key: 3d9875e51fbd20c7754e65422f7ce5e1" \
//   -H "X-Algolia-Application-Id: latency" \
//   --data-binary '{ "params": "query=g&hitsPerPage=2&getRankingInfo=1" }' \
//   "https://latency-dsn.algolia.net/1/indexes/bestbuy/query"
