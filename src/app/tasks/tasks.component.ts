import { Component, Input } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";
import { dummyTasks } from "../dummy-tasks";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";

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
  tasks = dummyTasks;

  get name() {
    return DUMMY_USERS.find((user) => user.id === this.selectedUserId)?.name;
  }

  get userTasks() {
    return this.tasks.filter((task) => task.userId === this.selectedUserId);
  }

  onCompleteTask(taskId: string) {
    return (this.tasks = this.tasks.filter((task) => task.id !== taskId));
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask({ title, summary, dueDate }: { title: string; summary: string; dueDate: string }) {
    this.tasks.push({ id: crypto.randomUUID(), title, summary, dueDate, userId: this.selectedUserId });
    this.isAddingTask = false;
  }
}
