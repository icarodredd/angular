import { Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";

@Injectable({ providedIn: "root" })
export class TasksService {
  private tasks = signal<Task[]>([]);

  allTasks = this.tasks.asReadonly();

  addTasks(taskData: { title: string; description: string }) {
    const newTask: Task = { ...taskData, id: Math.random().toString(), status: "IN_PROGRESS" };
    this.tasks.update((oldTasks) => [...oldTasks, newTask]);
  }

  updateTaskStatus(taskId: string, status: TaskStatus) {
    this.tasks.update((oldTasks) => oldTasks.map((item) => (item.id === taskId ? { ...item, status: status } : item)));
  }
}
