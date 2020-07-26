import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { DebugElement } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de tener un link a la página de médicos', () => {
    
    const debugsElements: DebugElement[] = fixture.debugElement.queryAll( By.directive( RouterLinkWithHref ) );

    let existe = false;

    for( const elem of debugsElements ){
      if(elem.attributes['routerLink'] === '/medicos'){
        existe = true;
        break;
      }
    }

    expect( existe ).toBeTruthy();

  });
});
