import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonecontactlistComponent } from './phonecontactlist.component';

describe('PhonecontactlistComponent', () => {
  let component: PhonecontactlistComponent;
  let fixture: ComponentFixture<PhonecontactlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhonecontactlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhonecontactlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
