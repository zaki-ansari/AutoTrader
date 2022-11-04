import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleMonitorComponent } from './rule-monitor.component';

describe('RuleMonitorComponent', () => {
  let component: RuleMonitorComponent;
  let fixture: ComponentFixture<RuleMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleMonitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
