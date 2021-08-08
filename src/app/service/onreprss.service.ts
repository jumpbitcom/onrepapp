import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as xml2js from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class OnrepRss {
  rssData: NewsRss;

  constructor(private http: HttpClient) { }
  getRssFeedData() {
    const requestOptions = {
      observe: 'body',
      responseType: 'text'
    };
    this.http
      .get<any>('https://gadgets.ndtv.com/rss/feeds', requestOptions)
      .subscribe(data => {
        const parseString = xml2js.parseString;
        parseString(data, (err, result: NewsRss) => {
          this.rssData = result;
        });
      });
  }

}

export interface NewsRss {
  rss: IRssObject;
}

export interface IRssObject {
  $: any;
  channel: Array<IRssChannel>;
}

export interface IRssChannel {
  'atom:link': Array<string>;
  description: Array<string>;
  image: Array<IRssImage>;
  item: Array<IRssItem>;
  language: Array<string>;
  lastBuildDate: Date;
  link: Array<string>;
  title: Array<string>;
}

export interface IRssImage {
  link: Array<string>;
  title: Array<string>;
  url: Array<string>;
}

export interface IRssItem {
  category: Array<string>;
  description: Array<string>;
  guid: any;
  link: Array<string>;
  pubDate: Date;
  title: Array<string>;
}

