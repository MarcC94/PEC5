import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinenewComponent } from './winenew.component';

describe('WinenewComponent', () => {
  let component: WinenewComponent;
  let fixture: ComponentFixture<WinenewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinenewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
