import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  serviceUrl = 'http://localhost:3000/api/';
  version = 'v1/';
  apiKey = 'efc1f47ff01e45a68ac03e38ec02a625';
  constructor() { }
}
