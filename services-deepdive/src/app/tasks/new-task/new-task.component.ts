import { Component, ElementRef, inject, viewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TasksService } from "../tasks.service";

@Component({
  selector: "app-new-task",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./new-task.component.html",
  styleUrl: "./new-task.component.css",
})
export class NewTaskComponent {
  constructor() {}
  private tasksService = inject(TasksService);

  private formEl = viewChild<ElementRef<HTMLFormElement>>("form");

  onAddTask(title: string, description: string) {
    this.tasksService.addTasks({ title, description });
    this.formEl()?.nativeElement.reset();
  }
}