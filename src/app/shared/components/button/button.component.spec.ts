import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ButtonComponent } from './button.component';

import { FakeTranslatePipe } from '../../../common/pipes/fake-translate.pipe';

describe('ButtonComponent', () => {
  let fixture: ComponentFixture<ButtonComponent>
  let component: ButtonComponent
  let de: DebugElement
  let el: HTMLElement

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ButtonComponent, FakeTranslatePipe],
      providers: []
    })

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('button'));
    el = de.nativeElement;
  })

  it('should create a component instance', () => {
    expect(component).toBeDefined();
  })

  it('should have no button text in the DOM untill call detachChanges', () => {
    expect(el.textContent).toEqual('');
  })

  it('should display button text plus', () => {
    component.type = {
      class: 'btn--plus'
    }
    fixture.detectChanges();
    expect(el.textContent).toContain('+');
  })

  it('should display button text save', () => {
    component.type = {
      class: 'btn--save'
    }
    fixture.detectChanges();
    expect(el.textContent).toContain('save');
  })

  it('shoule display button with default text', () => {
    component.type = {
      class: 'btn'
    }
    fixture.detectChanges();
    expect(el.textContent).toBe('');
  })
})
