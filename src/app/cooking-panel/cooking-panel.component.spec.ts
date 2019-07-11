import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingPanelComponent } from './cooking-panel.component';

describe('CookingPanelComponent', () => {
  let component: CookingPanelComponent;
  let fixture: ComponentFixture<CookingPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookingPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
