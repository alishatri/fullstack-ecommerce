import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  isEmpty = false;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  login() {
    if (this.email.length !== 0 && this.password.length !== 0) {
      this.isEmpty = false;
      this.authService.login(this.email, this.password).subscribe(
        (data) => {
          console.log(data);
          localStorage.setItem('token', JSON.stringify(data));
          if(data)
          this.router.navigateByUrl('/dashboard');
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.isEmpty = true;
    }
  }
}
