import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinLookupComponentComponent } from './pin-lookup-component.component';

describe('PinLookupComponentComponent', () => {
  let component: PinLookupComponentComponent;
  let fixture: ComponentFixture<PinLookupComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinLookupComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinLookupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
