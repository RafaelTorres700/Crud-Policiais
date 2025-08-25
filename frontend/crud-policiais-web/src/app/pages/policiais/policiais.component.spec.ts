import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciaisComponent } from './policiais.component';

describe('PoliciaisComponent', () => {
  let component: PoliciaisComponent;
  let fixture: ComponentFixture<PoliciaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliciaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoliciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
