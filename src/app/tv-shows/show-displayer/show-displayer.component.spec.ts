import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDisplayerComponent } from './show-displayer.component';

describe('ShowDisplayerComponent', () => {
  let component: ShowDisplayerComponent;
  let fixture: ComponentFixture<ShowDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
