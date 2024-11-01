import { Injectable, signal } from "@angular/core";
import { Task } from "./task.model";

@Injectable({ providedIn: "root" })
export class TasksService {
  constructor() {}

  tasks = signal<Task[]>([]);

  addTasks(taskData: { title: string; description: string }) {
    const newTask: Task = { ...taskData, id: Math.random().toString(), status: "OPEN" };
    this.tasks.update((oldTasks) => [...oldTasks]);
  }
}