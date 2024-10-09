import { Component, Input } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";
import { dummyTasks } from "../dummy-tasks";
import { TaskComponent } from "./task/task.component";

@Component({
  selector: "app-tasks",
  standalone: true,
  imports: [TaskComponent],
  templateUrl: "./tasks.component.html",
  styleUrl: "./tasks.component.css",
})
export class TasksComponent {
  @Input({ required: true }) selectedUserId!: string;
  tasks = dummyTasks;

  get name() {
    return DUMMY_USERS.find((user) => user.id === this.selectedUserId)?.name;
  }

  get userTasks() {
    return this.tasks.filter((task) => task.userId === this.selectedUserId);
  }
}
