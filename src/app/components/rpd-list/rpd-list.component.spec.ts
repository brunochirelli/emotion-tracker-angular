import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpdListComponent } from './rpd-list.component';

describe('RpdListComponent', () => {
  let component: RpdListComponent;
  let fixture: ComponentFixture<RpdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpdListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
