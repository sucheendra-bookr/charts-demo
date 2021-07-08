import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareDataForBoardComponent } from './prepare-data-for-board.component';

describe('PrepareDataForBoardComponent', () => {
  let component: PrepareDataForBoardComponent;
  let fixture: ComponentFixture<PrepareDataForBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepareDataForBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareDataForBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
