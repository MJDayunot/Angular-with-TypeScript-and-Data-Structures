import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopspecificationslistComponent } from './laptopspecificationslist.component';

describe('LaptopspecificationslistComponent', () => {
  let component: LaptopspecificationslistComponent;
  let fixture: ComponentFixture<LaptopspecificationslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopspecificationslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopspecificationslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
