import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworklistComponent } from './frameworklist.component';

describe('FrameworklistComponent', () => {
  let component: FrameworklistComponent;
  let fixture: ComponentFixture<FrameworklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameworklistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameworklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
