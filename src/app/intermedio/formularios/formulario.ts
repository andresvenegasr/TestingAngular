import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class FormularioRegister {
    public form: FormGroup;

    constructor(private _fb: FormBuilder) {
        this.form = _fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }
}