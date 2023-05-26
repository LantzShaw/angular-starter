import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitecaseDesignComponent } from './litecase-design.component';

describe('LitecaseDesignComponent', () => {
  let component: LitecaseDesignComponent;
  let fixture: ComponentFixture<LitecaseDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitecaseDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LitecaseDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
