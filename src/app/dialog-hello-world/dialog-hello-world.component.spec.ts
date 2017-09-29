import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogHelloWorldComponent } from './dialog-hello-world.component';

describe('DialogHelloWorldComponent', () => {
  let component: DialogHelloWorldComponent;
  let fixture: ComponentFixture<DialogHelloWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogHelloWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogHelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
