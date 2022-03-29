import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    })
  }
  // login define
  loggedIn() {
    if (!this.loginForm.valid) { alert("Invalid form"); return }
    this._http.post<any>("http://localhost:3000/api/mobile/auth/login", this.loginForm.value).subscribe(res => {
      // const user = res.find((a: any) => {
      //   return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      // })
      console.log('res', res)
      if (res) {
        alert("Login successfull")
        this.loginForm.reset()
        this.router.navigate(['/'])
      } else {
        alert("User not Found")
      }
    })
  }
  form() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required,]),
      // role: new FormControl('Admin')
    })
  }
}
