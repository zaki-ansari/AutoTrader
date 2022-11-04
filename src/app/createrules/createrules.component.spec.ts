import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterulesComponent } from './createrules.component';

describe('CreaterulesComponent', () => {
  let component: CreaterulesComponent;
  let fixture: ComponentFixture<CreaterulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaterulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaterulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
