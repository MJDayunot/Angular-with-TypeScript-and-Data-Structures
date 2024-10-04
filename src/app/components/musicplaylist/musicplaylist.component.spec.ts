import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicplaylistComponent } from './musicplaylist.component';

describe('MusicplaylistComponent', () => {
  let component: MusicplaylistComponent;
  let fixture: ComponentFixture<MusicplaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicplaylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
