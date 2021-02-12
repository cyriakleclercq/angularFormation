import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireDynamiqueComponent } from './formulaire-dynamique.component';

describe('FormulaireDynamiqueComponent', () => {
  let component: FormulaireDynamiqueComponent;
  let fixture: ComponentFixture<FormulaireDynamiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireDynamiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireDynamiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
