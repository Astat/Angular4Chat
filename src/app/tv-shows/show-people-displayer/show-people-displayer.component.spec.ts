import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPeopleDisplayerComponent } from './show-people-displayer.component';

describe('ShowPeopleDisplayerComponent', () => {
  let component: ShowPeopleDisplayerComponent;
  let fixture: ComponentFixture<ShowPeopleDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPeopleDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPeopleDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
