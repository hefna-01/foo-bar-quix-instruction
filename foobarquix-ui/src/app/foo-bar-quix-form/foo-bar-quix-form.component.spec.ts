import {TestBed, waitForAsync} from '@angular/core/testing';
import {FooBarQuixService} from '../foo-bar-quix.service';
import {MATERIAL_MODULES} from '../app.module';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FooBarQuixFormComponent} from './foo-bar-quix-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { By } from '@angular/platform-browser';

let  fooBarQuixService: FooBarQuixService;

describe('FooBar Quix Form Component', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ...MATERIAL_MODULES,
        FormsModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule
      ],
      providers: [
        FooBarQuixService
      ],
      declarations: [FooBarQuixFormComponent]
    }).compileComponents();
    fooBarQuixService = TestBed.inject(FooBarQuixService);
  }));

  it('should display the component properly', () => {
    const fixture = TestBed.createComponent(FooBarQuixFormComponent);
    expect(fixture.componentInstance).toBeDefined();
  });

  it('should initialise', (done) => {
    const fixture = TestBed.createComponent(FooBarQuixFormComponent);
    fixture.componentInstance.createForm();
    fixture.detectChanges();
    fixture.componentInstance.formGroup.setValue({
      inputNumber: 33
    });
    fixture.detectChanges();
    expect(fixture.componentInstance.formGroup.valid).toBeTruthy();
    fixture.whenStable().then(() => {
      expect(fixture.debugElement.query(By.css('input[formControlName="inputNumber"]'))
        .nativeElement.value).toContain(33);
      done();
    });
  });
});

