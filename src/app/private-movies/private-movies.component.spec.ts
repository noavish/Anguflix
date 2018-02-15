import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateMoviesComponent } from './private-movies.component';

describe('PrivateMoviesComponent', () => {
  let component: PrivateMoviesComponent;
  let fixture: ComponentFixture<PrivateMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
