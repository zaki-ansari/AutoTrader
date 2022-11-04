import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogFieldauditComponent } from './mat-dialog-fieldaudit.component';

describe('MatDialogFieldauditComponent', () => {
  let component: MatDialogFieldauditComponent;
  let fixture: ComponentFixture<MatDialogFieldauditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDialogFieldauditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDialogFieldauditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
