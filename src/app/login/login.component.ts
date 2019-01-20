import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('signupForm') form: NgForm;
  @ViewChild('doesRegistration') doesRegistration: boolean;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  }

  sendForm() {
    if (this.form.value.doesRegistration) {
      this.authService.register(this.form.value.username).subscribe(res => console.log(res));
    } else {
      this.authService.login(null, this.form.value.username, this.form.value.password).subscribe(
        res => {
          this.router.navigate(['/']);
          this.authService.isLoggedIn = true;
        }, error => {
          alert('Zostały wprowadzone nieprawidłowe dane.');
        }
      );
    }
    this.form.resetForm();
  }

}
