import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerlistComponent } from './flowerlist.component';

describe('FlowerlistComponent', () => {
  let component: FlowerlistComponent;
  let fixture: ComponentFixture<FlowerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowerlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
