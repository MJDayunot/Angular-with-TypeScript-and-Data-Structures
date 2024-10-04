import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealplanlistComponent } from './mealplanlist.component';

describe('MealplanlistComponent', () => {
  let component: MealplanlistComponent;
  let fixture: ComponentFixture<MealplanlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealplanlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealplanlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
