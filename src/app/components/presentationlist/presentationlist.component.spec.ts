import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationListComponent } from './presentationlist.component';

describe('PresentationlistComponent', () => {
  let component: PresentationListComponent;
  let fixture: ComponentFixture<PresentationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
