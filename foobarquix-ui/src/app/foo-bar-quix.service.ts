import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Result} from './model/result';
import {Observable} from 'rxjs';

const API_URL_SERVICE = environment.apiUrl + '/foo-bar-quix/';

@Injectable({
  providedIn: 'root'
})
export class FooBarQuixService {
  constructor(private http: HttpClient) {}

  getQuixByInputNumber(inputNumber: number): Observable<Result> {
    return this.http.get<Result>(API_URL_SERVICE + inputNumber);
  }

}
