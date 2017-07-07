import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSeasonsComponent } from './show-seasons.component';

describe('ShowSeasonsComponent', () => {
  let component: ShowSeasonsComponent;
  let fixture: ComponentFixture<ShowSeasonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSeasonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
