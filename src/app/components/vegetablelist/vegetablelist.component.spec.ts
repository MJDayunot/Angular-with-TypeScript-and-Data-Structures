import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetablelistComponent } from './vegetablelist.component';

describe('VegetablelistComponent', () => {
  let component: VegetablelistComponent;
  let fixture: ComponentFixture<VegetablelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VegetablelistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VegetablelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
