import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpdateTaskComponent } from '../update-task/update-task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule,FormsModule,UpdateTaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  showUpdateTaskIndex: number | null = null;
  showUpdateComponent!: boolean;
  taskToUpdate!: null;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks(): void {
    this.tasks = this.taskService.getTasks();
  }
  
  toggleUpdateTask(index: number): void {
    this.showUpdateTaskIndex = (this.showUpdateTaskIndex === index) ? null : index;
  }
  updateTask(task: Task): void {
   
    console.log('Updating task:', task);
    
  }

  deleteTask(index: number): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(index);
      this.fetchTasks();
    }
  }

}
