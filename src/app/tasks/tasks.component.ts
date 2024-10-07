import { Component, Input } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";

@Component({
  selector: "app-tasks",
  standalone: true,
  imports: [],
  templateUrl: "./tasks.component.html",
  styleUrl: "./tasks.component.css",
})
export class TasksComponent {
  @Input({ required: true }) id!: string;

  get name() {
    return DUMMY_USERS.find((user) => user.id === this.id)?.name;
  }
}
