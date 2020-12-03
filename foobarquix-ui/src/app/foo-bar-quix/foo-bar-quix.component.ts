import { Component, OnInit, OnDestroy } from '@angular/core';
import {FooBarQuixService} from '../foo-bar-quix.service';


@Component({
  selector: 'app-foo-bar-quix',
  templateUrl: './foo-bar-quix.component.html'
})
export class FooBarQuixComponent implements OnInit, OnDestroy {

  public numberConverted: NumberConverted;

  public numberConvertedList: NumberConverted[] = [];

  constructor(private fooBarQuixService: FooBarQuixService) { }

  ngOnInit(): void {
    this.numberConvertedList = [];
  }

  ngOnDestroy(): void {
    this.numberConvertedList = [];
  }

  convertNumber(inputNumber: number): void {
    if (inputNumber && inputNumber > 0) {
      this.fooBarQuixService.getQuixByInputNumber(inputNumber).subscribe(result => {
        this.numberConverted = {
          numberToConvert: inputNumber,
          result: result.result
        };
        this.numberConvertedList.push(this.numberConverted);
      });
    }
  }
}

interface NumberConverted {
  numberToConvert: number;
  result: string;
}
