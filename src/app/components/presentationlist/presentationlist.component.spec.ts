import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationlistComponent } from './presentationlist.component';

describe('PresentationlistComponent', () => {
  let component: PresentationlistComponent;
  let fixture: ComponentFixture<PresentationlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
