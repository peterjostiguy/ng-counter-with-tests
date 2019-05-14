import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterListComponent } from './counter-list.component';
import { CounterDetailComponent } from '../counter-detail/counter-detail.component';

describe('CounterListComponent', () => {
  let component: CounterListComponent;
  let fixture: ComponentFixture<CounterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterListComponent, CounterDetailComponent ]
    })
    .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(CounterListComponent);
          component = fixture.componentInstance;
          fixture.detectChanges()
        });
      }));

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should initialize with no counters', () => {
      expect(component.counters.length).toEqual(0)
    })

    it('should create a counter', () => {
      component.create();
      expect(component.counters.length).toEqual(1)
    })

    it('should respond to click', async(() => {
      spyOn(component, 'create');

      let button = fixture.debugElement.nativeElement.querySelector('.create-new');
      button.click();

      fixture.whenStable().then(() => {
        console.log(component.counters)
        expect(component.create).toHaveBeenCalled();
      });
    }));
  });
