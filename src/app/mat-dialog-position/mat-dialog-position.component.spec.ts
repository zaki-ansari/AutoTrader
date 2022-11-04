import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogPositionComponent } from './mat-dialog-position.component';

describe('MatDialogPositionComponent', () => {
  let component: MatDialogPositionComponent;
  let fixture: ComponentFixture<MatDialogPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDialogPositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDialogPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
