import { Component } from "@angular/core";

import { LoginComponent } from "./auth/login/login.component";
import { AnotherLoginComponent } from "./auth/another-login/another-login.component";
import { SignupComponent } from "./auth/signup/signup.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  imports: [LoginComponent, AnotherLoginComponent, SignupComponent],
})
export class AppComponent {}
