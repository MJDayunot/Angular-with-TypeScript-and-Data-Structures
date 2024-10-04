import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopertoolslistComponent } from './developertoolslist.component';

describe('DevelopertoolslistComponent', () => {
  let component: DevelopertoolslistComponent;
  let fixture: ComponentFixture<DevelopertoolslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopertoolslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopertoolslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
