import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonTeaserComponent } from './person-teaser.component';

describe('PersonTeaserComponent', () => {
  let component: PersonTeaserComponent;
  let fixture: ComponentFixture<PersonTeaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonTeaserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
