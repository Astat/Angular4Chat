import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowActorsComponent } from './show-actors.component';

describe('ShowActorsComponent', () => {
  let component: ShowActorsComponent;
  let fixture: ComponentFixture<ShowActorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowActorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
