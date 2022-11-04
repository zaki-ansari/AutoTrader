import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleConfigComponent } from './rule-config.component';

describe('RuleConfigComponent', () => {
  let component: RuleConfigComponent;
  let fixture: ComponentFixture<RuleConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
