import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingListComponent } from './paintinglist.component';

describe('PaintinglistComponent', () => {
  let component: PaintingListComponent;
  let fixture: ComponentFixture<PaintingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaintingListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
