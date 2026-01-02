import { describe, beforeEach, it, expect } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProviderPageComponent } from './select-provider-page.component';

describe('SelectProviderPageComponent', () => {
  let component: SelectProviderPageComponent;
  let fixture: ComponentFixture<SelectProviderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectProviderPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectProviderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
