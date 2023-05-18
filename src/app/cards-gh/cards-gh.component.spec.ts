import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsGHComponent } from './cards-gh.component';

describe('CardsGHComponent', () => {
  let component: CardsGHComponent;
  let fixture: ComponentFixture<CardsGHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsGHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsGHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
