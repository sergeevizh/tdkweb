import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTeaserComponent } from './show-teaser.component';

describe('ShowTeaserComponent', () => {
  let component: ShowTeaserComponent;
  let fixture: ComponentFixture<ShowTeaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTeaserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
