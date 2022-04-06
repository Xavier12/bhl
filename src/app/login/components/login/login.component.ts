import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  display = false;
  showSplash = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      cardId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.showSplash = !this.showSplash;
    }, 2000);
  }

  get cardIdField(): AbstractControl {
    return this.loginForm.get('cardId') as AbstractControl;
  }

  get passwordField(): AbstractControl {
    return this.loginForm.get('password') as AbstractControl;
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.cardId, this.loginForm.value.password)
      .then((response) => {
        localStorage.setItem('auth_token', response.token);
        this.router.navigateByUrl('/home/product');
      });
    }
    this.loginForm.markAllAsTouched();
  }
}
