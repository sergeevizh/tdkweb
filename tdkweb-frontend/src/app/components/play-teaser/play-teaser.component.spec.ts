import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayTeaserComponent } from './play-teaser.component';

describe('PlayTeaserComponent', () => {
  let component: PlayTeaserComponent;
  let fixture: ComponentFixture<PlayTeaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayTeaserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
