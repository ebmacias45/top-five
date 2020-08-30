import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopFiveApiService {
  constructor(private http: HttpClient) {}
  /**
   *
   * @param tvShow tv-show
   * @returns 10 elements tv-shows array with the tv-show desired and similars
   */
  public getTvShow(tvShow: string): any {
    return this.http.get(environment.apiUrl + '/search/shows?q=' + tvShow);
  }
}
