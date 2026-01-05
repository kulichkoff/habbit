import { describe, beforeEach, it, expect } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsListComponent } from './boards-list.component';
import { provideStore } from '@ngxs/store';
import { BoardsState } from '@front/entities/habit-track';

describe('BoardsListComponent', () => {
  let component: BoardsListComponent;
  let fixture: ComponentFixture<BoardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardsListComponent],
      providers: [provideStore([BoardsState])],
    }).compileComponents();

    fixture = TestBed.createComponent(BoardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
