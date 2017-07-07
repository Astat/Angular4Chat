import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginTvShowsComponent } from './plugin-tv-shows.component';

describe('PluginTvShowsComponent', () => {
  let component: PluginTvShowsComponent;
  let fixture: ComponentFixture<PluginTvShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluginTvShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginTvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
