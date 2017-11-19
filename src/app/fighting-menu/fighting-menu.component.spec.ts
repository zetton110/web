import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightingMenuComponent } from './fighting-menu.component';

describe('FightingMenuComponent', () => {
  let component: FightingMenuComponent;
  let fixture: ComponentFixture<FightingMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightingMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
