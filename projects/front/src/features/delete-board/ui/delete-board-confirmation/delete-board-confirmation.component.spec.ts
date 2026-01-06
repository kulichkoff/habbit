import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBoardConfirmationComponent } from './delete-board-confirmation.component';

describe('DeleteBoardConfirmationComponent', () => {
  let component: DeleteBoardConfirmationComponent;
  let fixture: ComponentFixture<DeleteBoardConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteBoardConfirmationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteBoardConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
