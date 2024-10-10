import { DatePipe } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-task",
  standalone: true,
  imports: [DatePipe],
  templateUrl: "./task.component.html",
  styleUrl: "./task.component.css",
})
export class TaskComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) dueDate!: string;
  @Input({ required: true }) summary!: string;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.complete.emit(this.id);
  }
}
