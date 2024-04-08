import { Component, Input, OnInit } from '@angular/core';
import { Task, TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.scss'
})
export class UpdateTaskComponent implements OnInit {

  taskId: number=0;
  @Input() task: Task = { taskname: '', description: '' };
  

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    const snapshot = this.route.snapshot;
    if (snapshot && snapshot.paramMap) {
      const taskIdParam = snapshot.paramMap.get('id');
      if (taskIdParam) {
        this.taskId = +taskIdParam;
        this.task = this.taskService.getTask(this.taskId);
      }
    }
  }
  

  updateTask(): void {
    this.taskService.updateTask(this.taskId, this.task);
  }
}
