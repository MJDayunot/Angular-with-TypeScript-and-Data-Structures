import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationerylistComponent } from './stationerylist.component';

describe('StationerylistComponent', () => {
  let component: StationerylistComponent;
  let fixture: ComponentFixture<StationerylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StationerylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationerylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
