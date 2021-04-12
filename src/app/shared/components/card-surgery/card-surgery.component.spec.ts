import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSurgeryComponent } from './card-surgery.component';

describe('CardSurgeryComponent', () => {
  let component: CardSurgeryComponent;
  let fixture: ComponentFixture<CardSurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSurgeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
