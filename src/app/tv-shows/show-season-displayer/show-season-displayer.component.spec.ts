import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSeasonDisplayerComponent } from './show-season-displayer.component';

describe('ShowSeasonDisplayerComponent', () => {
  let component: ShowSeasonDisplayerComponent;
  let fixture: ComponentFixture<ShowSeasonDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSeasonDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSeasonDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
