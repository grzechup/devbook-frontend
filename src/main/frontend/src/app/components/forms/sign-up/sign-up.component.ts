import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../security/authentication.service";
import {UserService} from "../../../services/user.service";
import {first} from "rxjs/operators";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    /*    private alertService: AlertService*/
  ) {
    // redirect to home if already logged in
    /*    if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
        }*/
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          /*      this.alertService.success('Registration successful', true);*/
          this.router.navigate(['/login']);
        },
        error => {
          this.errorMessage = error.error.message;
          this.isSignUpFailed = true;
          /*  this.alertService.error(error);*/
          this.loading = false;
        });
  }
}
