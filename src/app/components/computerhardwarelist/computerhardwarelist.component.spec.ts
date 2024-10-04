import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerhardwarelistComponent } from './computerhardwarelist.component';

describe('ComputerhardwarelistComponent', () => {
  let component: ComputerhardwarelistComponent;
  let fixture: ComponentFixture<ComputerhardwarelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerhardwarelistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerhardwarelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
