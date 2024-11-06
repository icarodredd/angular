import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: "app-another-login",
  standalone: true,
  templateUrl: "./another-login.component.html",
  styleUrl: "./another-login.component.css",
  imports: [ReactiveFormsModule],
})
export class AnotherLoginComponent {
  form = new FormGroup({
    email: new FormControl("", { validators: [Validators.email, Validators.required] }),
    password: new FormControl("", { validators: [Validators.required, Validators.minLength(6)] }),
  });

  onSubmit() {
    console.log(this.form);
    this.form.reset();
  }
}
