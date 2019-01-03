import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardwriteComponent } from './boardwrite.component';

describe('BoardwriteComponent', () => {
  let component: BoardwriteComponent;
  let fixture: ComponentFixture<BoardwriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardwriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardwriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
