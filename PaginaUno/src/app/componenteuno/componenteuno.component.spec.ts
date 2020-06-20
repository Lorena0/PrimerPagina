import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteunoComponent } from './componenteuno.component';

describe('ComponenteunoComponent', () => {
  let component: ComponenteunoComponent;
  let fixture: ComponentFixture<ComponenteunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
