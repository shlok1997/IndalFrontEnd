import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GruhComponent } from './gruh.component';

describe('GruhComponent', () => {
  let component: GruhComponent;
  let fixture: ComponentFixture<GruhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
