import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDetailComponent } from './counter-detail.component';

describe('CounterDetailComponent', () => {
  let component: CounterDetailComponent;
  let fixture: ComponentFixture<CounterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a new counter', () => {
    expect(component.counter).toBeTruthy();
  });

  it('should initialize with a value of zero', () => {
    expect(component.counter.value).toEqual(0);
  })

  it('should increment', () => {
    component.increment();
    expect(component.counter.value).toEqual(1);
  })

  it('should increment when clicked', async(() => {
    spyOn(component, 'increment');

    let button = fixture.debugElement.nativeElement.querySelector('.increment');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.increment).toHaveBeenCalled();
    });
  }));
});
