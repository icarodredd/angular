import { Component } from "@angular/core";

import { LoginComponent } from "./auth/login/login.component";
import { AnotherLoginComponent } from "./auth/another-login/another-login.component";

@Component({
  selector: "app-root",
  standalone: true,
  templateUrl: "./app.component.html",
  imports: [LoginComponent, AnotherLoginComponent],
})
export class AppComponent {}
