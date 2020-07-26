import { TestBed, ComponentFixture } from '@angular/core/testing';

import { MedicoComponent } from './medico.component';
import { MedicosService } from 'src/app/intermedio/espias/medicos.service';
import { HttpClientModule } from '@angular/common/http';


describe('MedicoComponent', () => {
    
    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                MedicoComponent
            ],
            imports: [ HttpClientModule ],
            providers: [
                MedicosService
            ]
        });

        fixture = TestBed.createComponent( MedicoComponent );

        component = fixture.componentInstance;
    });

    it('Debe de crearse el componente', () => {
        
        expect( component ).toBeTruthy();

    });
    

    it('Debe de retornar el saludo al médico', () => {
        
        const nombre = 'Andres';
        const res = component.saludarMedico( nombre );

        expect( res ).toContain('Andres');

    });
});