import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // @Input() formControlName : formControlName;
  registerForm: FormGroup;
  submit = false;
  gender = ['Male', 'Female', 'I\'d rather not say']
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    //create form
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      surname: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      acceptContact: [false, Validators.requiredTrue]
    })
  }

  get r() { return this.registerForm.controls; }

  onSubmit() {

    this.submit = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  
  public hasError(control: string, error: string){
    return this.registerForm.controls[control].hasError(error);
  }
}



