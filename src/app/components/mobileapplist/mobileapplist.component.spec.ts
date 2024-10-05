import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppListComponent } from './mobileapplist.component';

describe('MobileapplistComponent', () => {
  let component: MobileAppListComponent;
  let fixture: ComponentFixture<MobileAppListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileAppListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAppListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
