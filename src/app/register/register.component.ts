import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) {
    this.registerForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      confirmEmail: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {

  }
  // make method to create user
  register() {
    console.log('this.registerForm.value', this.registerForm.value)
    console.log('this.registerForm', this.registerForm)
    if (!this.registerForm.valid) { alert("Invalid fields"); return }
    this._http.post<any>("http://localhost:3000/api/mobile/auth/signup", this.registerForm.value, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    }).subscribe(res => {
      alert("Registration successfull")
      this.registerForm.reset()
      this.router.navigate(['login'])
    }, err => {
      alert("Error 404")
    }
    )
  }
  form() {
    this.registerForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      confirmEmail: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
      // role: new FormControl('Admin')
    })
  }
}
