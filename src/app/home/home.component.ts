import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading: boolean = false;
  registerForm: FormGroup;
  submit: boolean = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    //create form
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      surname: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      gender: ['', Validators.required],
      acceptContact: [false, Validators.requiredTrue]
    })
  }

  get r() { return this.registerForm.controls; }

  onSubmit() {

    this.submit = true;

    // stop here if form is invalid
    if (!this.registerForm.valid) {
      return;
    }

    this.loading = true
    // display form values on success
    setTimeout(() => {
      this.loading = false
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }, 5000);
  }

}



