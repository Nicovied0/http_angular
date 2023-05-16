import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOnClickComponent } from './get-on-click.component';

describe('GetOnClickComponent', () => {
  let component: GetOnClickComponent;
  let fixture: ComponentFixture<GetOnClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOnClickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOnClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
