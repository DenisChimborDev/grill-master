import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingRoundComponent } from './cooking-round.component';

describe('CookingRoundComponent', () => {
  let component: CookingRoundComponent;
  let fixture: ComponentFixture<CookingRoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookingRoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
