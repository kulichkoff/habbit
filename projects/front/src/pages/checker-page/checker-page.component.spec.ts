import { describe, beforeEach, it, expect } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideStore } from '@ngxs/store';

import { CheckerPageComponent } from './checker-page.component';
import { BoardsListComponent } from '@front/widgets/boards-list';
import { BoardsState } from '@front/entities/habit-track';

describe('CheckerPageComponent', () => {
  let component: CheckerPageComponent;
  let fixture: ComponentFixture<CheckerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckerPageComponent, BoardsListComponent],
      providers: [provideStore([BoardsState])],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
