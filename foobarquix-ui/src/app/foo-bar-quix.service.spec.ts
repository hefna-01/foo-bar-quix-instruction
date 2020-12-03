import { TestBed } from '@angular/core/testing';
import {FooBarQuixService} from './foo-bar-quix.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Type} from '@angular/core';
import {Result} from './model/result';
import {environment} from '../environments/environment';

const MOCK_RESPONSE: Result = {
  result: 'FooBarBar'
};

describe('Service: StoreService', () => {
  let fooBarService: FooBarQuixService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        imports: [
          HttpClientTestingModule
        ],
        providers: [FooBarQuixService]
      });
    fooBarService = TestBed.inject(FooBarQuixService);
    httpMock = TestBed.inject(HttpTestingController as Type<HttpTestingController>);
  });

  it('should initialize service', () => {
    const service: FooBarQuixService = TestBed.inject(FooBarQuixService);
    expect(service).toBeTruthy();
  });

  it('should call getQuixByInputNumber', (done) => {
    fooBarService.getQuixByInputNumber(15).subscribe(result => {
      expect(result.result).toBe('FooBarBar');
      done();
    });
    const req = httpMock.expectOne(environment.apiUrl + '/foo-bar-quix/15');
    req.flush(MOCK_RESPONSE);
    expect(req.request.method).toEqual('GET');
  });
});
