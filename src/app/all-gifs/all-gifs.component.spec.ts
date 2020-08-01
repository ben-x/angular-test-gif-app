import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGifsComponent } from './all-gifs.component';

describe('AllGifsComponent', () => {
  let component: AllGifsComponent;
  let fixture: ComponentFixture<AllGifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
