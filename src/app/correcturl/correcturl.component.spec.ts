import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrecturlComponent } from './correcturl.component';

describe('CorrecturlComponent', () => {
  let component: CorrecturlComponent;
  let fixture: ComponentFixture<CorrecturlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrecturlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrecturlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
