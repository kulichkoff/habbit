import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckerBoardComponent } from './checker-board.component';
import { describe, beforeEach, it, expect } from 'vitest';

describe('CheckerBoardComponent', () => {
  let component: CheckerBoardComponent;
  let fixture: ComponentFixture<CheckerBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckerBoardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckerBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
