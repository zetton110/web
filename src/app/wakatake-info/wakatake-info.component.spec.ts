import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WakatakeInfoComponent } from './wakatake-info.component';

describe('WakatakeInfoComponent', () => {
  let component: WakatakeInfoComponent;
  let fixture: ComponentFixture<WakatakeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WakatakeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WakatakeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
