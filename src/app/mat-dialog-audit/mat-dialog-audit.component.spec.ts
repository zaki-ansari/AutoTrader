import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogAuditComponent } from './mat-dialog-audit.component';

describe('MatDialogAuditComponent', () => {
  let component: MatDialogAuditComponent;
  let fixture: ComponentFixture<MatDialogAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDialogAuditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDialogAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
