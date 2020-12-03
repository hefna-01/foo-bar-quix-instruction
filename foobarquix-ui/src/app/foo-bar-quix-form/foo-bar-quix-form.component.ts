import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FooBarQuixService} from '../foo-bar-quix.service';

@Component({
  selector: 'app-foo-bar-quix-form',
  templateUrl: './foo-bar-quix-form.component.html'
})
export class FooBarQuixFormComponent implements OnInit {

  public formGroup: FormGroup;
  @Output()
  submitNumberOutput: EventEmitter<number> = new EventEmitter();

  constructor(private fooBarQuixService: FooBarQuixService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  submitNumber(): void {
    if (this.formGroup.valid && this.formGroup.value.inputNumber > 0) {
      this.submitNumberOutput.emit(this.formGroup.value.inputNumber);
      this.createForm();
    }
  }

  private createForm(): void {
    this.formGroup = this.formBuilder.group({
      inputNumber: [null, Validators.required]
    });
  }

}
