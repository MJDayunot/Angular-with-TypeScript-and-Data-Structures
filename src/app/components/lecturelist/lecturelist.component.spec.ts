import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturelistComponent } from './lecturelist.component';

describe('LecturelistComponent', () => {
  let component: LecturelistComponent;
  let fixture: ComponentFixture<LecturelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LecturelistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecturelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
