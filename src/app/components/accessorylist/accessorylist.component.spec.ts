import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessorylistComponent } from './accessorylist.component';

describe('AccessorylistComponent', () => {
  let component: AccessorylistComponent;
  let fixture: ComponentFixture<AccessorylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessorylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
