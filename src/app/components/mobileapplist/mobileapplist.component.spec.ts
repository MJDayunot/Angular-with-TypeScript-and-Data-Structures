import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileapplistComponent } from './mobileapplist.component';

describe('MobileapplistComponent', () => {
  let component: MobileapplistComponent;
  let fixture: ComponentFixture<MobileapplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileapplistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileapplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
