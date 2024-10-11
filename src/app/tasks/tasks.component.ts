import { Component, Input } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from "./tasks.service";

@Component({
  selector: "app-tasks",
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: "./tasks.component.html",
  styleUrl: "./tasks.component.css",
})
export class TasksComponent {
  @Input({ required: true }) selectedUserId!: string;
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get name() {
    return DUMMY_USERS.find((user) => user.id === this.selectedUserId)?.name;
  }

  onCompleteTask(taskId: string) {}

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask({ title, summary, dueDate }: { title: string; summary: string; dueDate: string }) {}
}
