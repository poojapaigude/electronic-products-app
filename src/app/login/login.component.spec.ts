import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockStore: MockStore;
  let ele;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    mockStore = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    ele = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change theme on click', () => {
    const isdarktheme = true;
    component.changedTheme(isdarktheme);
    expect(component).toBeDefined();
  });

  it('should set submitted to true', () => {
    component.login();
    expect(component.login).toBeTruthy();
  });

  it('should call login method', () => {
    fixture.detectChanges();
    spyOn(component, 'login');
    ele = fixture.debugElement.query(By.css('button')).nativeElement;
    ele.click();
    expect(component.login).toHaveBeenCalledTimes(1);
  });

  it('should be valid form', () => {
    component.loginForm.controls['username'].setValue('asdas@mfaid.com');
    component.loginForm.controls['password'].setValue('test@213');
    expect(component.loginForm.valid).toBeTruthy();
  });

});
