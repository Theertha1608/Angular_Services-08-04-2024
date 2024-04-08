import { Component } from '@angular/core';
import { Task, TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  title: string = '';
  description: string = '';

  constructor(private taskService: TaskService) { }

  addTask(): void {
    if (this.title.trim() && this.description.trim()) {
      const newTask: Task = {
        taskname: this.title,
        description: this.description
      };
      this.taskService.addTask(newTask);
      this.title = '';
      this.description = '';
    } else {
      alert('Please provide both title and description.');
    }
  }
}
