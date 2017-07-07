import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEpisodeDisplayerComponent } from './show-episode-displayer.component';

describe('ShowEpisodeDisplayerComponent', () => {
  let component: ShowEpisodeDisplayerComponent;
  let fixture: ComponentFixture<ShowEpisodeDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEpisodeDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEpisodeDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
