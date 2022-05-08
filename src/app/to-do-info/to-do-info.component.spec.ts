import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoInfoComponent } from './to-do-info.component';

describe('ToDoInfoComponent', () => {
  let component: ToDoInfoComponent;
  let fixture: ComponentFixture<ToDoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
