import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
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
      name: [''],
      email: [''],
      confirmEmail: [],
      password: ['']
    })
  }

  ngOnInit(): void {

  }
  // make method to create user
  register() {
    this._http.post<any>("localhost:3000/api/mobile/auth/signup", this.registerForm.value).subscribe(res => {
      alert("Registration successfull")
      this.registerForm.reset()
      this.router.navigate(['login'])
    }, err => {
      alert("Error 404")
    }
    )
  }
}
