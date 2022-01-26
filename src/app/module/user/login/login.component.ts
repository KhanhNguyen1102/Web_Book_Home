import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../../service/authentication.service";
import {first} from "rxjs";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  registerForm: FormGroup = new FormGroup({
    newUserName: new FormControl(''),
    newPassWord: new FormControl(''),
    newConfirmPassWord : new FormControl('')
  })
  // @ts-ignore
  returnUrl: string;
  // @ts-ignore
  adminUrl: string;
  error = '';
  loading = false;
  submitted = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private  userService :UserService) {
    console.log(this.authenticationService.currentUserValue);
  }

  ngOnInit() {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
    this.adminUrl = '/admin'
  }

  login() {
    this.submitted = true;
    this.loading = true;
    this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
      .pipe(first())
      .subscribe(
        data => {
          // @ts-ignore
          localStorage.setItem('ACCESS_TOKEN', data.accessToken);
          // @ts-ignore
          localStorage.setItem('ROLE', data.roles[0].authority);
          // @ts-ignore
          localStorage.setItem('USERNAME', data.username);
          // @ts-ignore
          localStorage.setItem('USERID', data.id);
          // @ts-ignore
          if (data.roles[0].authority == "ROLE_ADMIN") {
            this.router.navigate([this.adminUrl])
          } else {
            this.router.navigate([this.returnUrl]);
          }

        },
        error => {
          alert("Tài khoản của bạn đã bị khoá hoặc sai mật khẩu!");
          this.loading = false;
        });
  }
  register(){
    let newUser = {
      username : this.registerForm.value.newUserName,
      password : this.registerForm.value.newPassWord,
      confirmPassword : this.registerForm.value.newConfirmPassWord
    }
    console.log(newUser)
    this.userService.register(newUser).subscribe(
      success =>{
        alert("Đăng kí thành công");
        this.registerForm.reset()
      },error1 => {
        alert("Đăng kí thất bại")
      }
    )
  }
}
