import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() { }

  addTask(task: Task): void {
    this.tasks.push(task);
  }


  getTasks(): Task[] {
    return this.tasks;
  }

  
  getTask(index: number): Task {
    return this.tasks[index];
  }


  updateTask(index: number, updatedTask: Task): void {
    this.tasks[index] = updatedTask;
  }

  deleteTask(index: number): void {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index, 1);
    }
  }
}
export interface Task {
  taskname: string;
  description: string;
}
