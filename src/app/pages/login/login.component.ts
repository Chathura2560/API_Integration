import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {routes} from '../../app.routes';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoginView: boolean = true;

  userRegisterObj: any = {
    userName:'',
    emailId:'',
    password: ''
  }

  userLogin: any = {
    userName:'',
    password: '',
  }

  router = inject(Router);

  onRegister() {
    const isLocalData = localStorage.getItem("angular18Local");
    if(isLocalData != null) {
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local",JSON.stringify(localArray))
    } else {
      const localArray = [];
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local",JSON.stringify(localArray))
    }
    alert("Registration Success");
  }

  onLogin() {
    // Directly navigate to the dashboard without checking login credentials
    this.router.navigateByUrl('dashboard').then((success) => {
      if (success) {
        // Navigation was successful
        console.log('Navigation successful');
      } else {
        // Navigation failed
        console.log('Navigation failed');
      }
    });
  }

}
