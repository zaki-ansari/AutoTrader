import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogSearchComponent } from './mat-dialog-search.component';

describe('MatDialogSearchComponent', () => {
  let component: MatDialogSearchComponent;
  let fixture: ComponentFixture<MatDialogSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDialogSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDialogSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
