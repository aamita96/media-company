import { Component, OnInit, ViewEncapsulation, OnChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  loginForm: FormGroup;
  staticAlertClosed = false;
  user;
  isLoggedIn$: Observable<boolean>;
  constructor(private modalService: NgbModal, public authService: AuthService, private router: Router) {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.loginForm = new FormGroup({
      userid: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  logMeIn() {
    const user = this.authService.login(this.loginForm.value);
    console.log(user);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      this.user = user;
      this.modalService.dismissAll();
    } else {
      this.staticAlertClosed = true;
      setTimeout(() => this.staticAlertClosed = false, 3500);
    }
  }

  logout() {
    this.router.navigate(['/']);
    this.authService.signout();
  }

}
