import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPlaylistComponent } from './musicplaylist.component';

describe('MusicplaylistComponent', () => {
  let component: MusicPlaylistComponent;
  let fixture: ComponentFixture<MusicPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicPlaylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
