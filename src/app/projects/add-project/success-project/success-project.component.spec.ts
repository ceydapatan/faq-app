import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessProjectComponent } from './success-project.component';

describe('SuccessProjectComponent', () => {
  let component: SuccessProjectComponent;
  let fixture: ComponentFixture<SuccessProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessProjectComponent]
    });
    fixture = TestBed.createComponent(SuccessProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
