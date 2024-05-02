import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessCategoryComponent } from './success-category.component';

describe('SuccessCategoryComponent', () => {
  let component: SuccessCategoryComponent;
  let fixture: ComponentFixture<SuccessCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessCategoryComponent]
    });
    fixture = TestBed.createComponent(SuccessCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
