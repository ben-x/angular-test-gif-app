import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as appConfig } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetGifService {
  baseURL: string = appConfig.appUrl;

  constructor(private http: HttpClient) { }

  getGif(searchWord) {
    const gifUrl = `${this.baseURL}&q=${searchWord}`;
    return this.http.get(gifUrl);
  }
}
