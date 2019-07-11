import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingInformationComponent } from './cooking-information.component';

describe('CookingInformationComponent', () => {
  let component: CookingInformationComponent;
  let fixture: ComponentFixture<CookingInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookingInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
