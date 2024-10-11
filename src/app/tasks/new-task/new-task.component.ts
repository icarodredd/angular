import { Component, EventEmitter, inject, Output } from "@angular/core";
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
  @Output() cancel = new EventEmitter();

  private tasksService = inject(TasksService);

  enteredTitle = "";
  enteredSummary = "";
  enteredDueDate = "";

  onCancel() {
    return this.cancel.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
      userId: crypto.randomUUID(),
    });
  }
}
