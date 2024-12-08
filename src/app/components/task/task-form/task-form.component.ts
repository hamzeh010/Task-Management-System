import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../interfaces/task';
import { TaskService } from '../../../services/TaskService';
import { UserService } from '../../../services/UserService';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  taskId: number | null = null;
  taskName: string = '';
  taskDescription: string = '';
  taskDetails: string = ''; // New property for task details
  taskPriority: string = '';
  taskStatus: string = '';
  taskAssignedTo: string = '';
  taskDueDate: string = '';

  priorities: string[] = ['Low', 'Medium', 'High'];
  statuses: string[] = ['Pending', 'In Progress', 'Completed'];
  users: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
    private userService: UserService // Inject UserService

  ) {}

  ngOnInit(): void {
    // Fetch task ID from route
    this.taskId = Number(this.route.snapshot.paramMap?.get('id')) || null;

    if (this.taskId) {
      // Load existing task details
      const task = this.taskService.getTasks().find(t => t.id === this.taskId);
      if (task) {
        this.taskName = task.name;
        this.taskDescription = task.description;
        this.taskDetails = task.details || '';
        this.taskPriority = task.priority;
        this.taskStatus = task.status;
        this.taskAssignedTo = task.assignedTo;
        this.taskDueDate = task.dueDate;
      }
    }

      // Fetch the list of users
      this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }



  isDueDateInvalid(date: string | null): boolean {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(date) < today;
  }

  isFormInvalid(): boolean {
    return (
      !this.taskName ||
      !this.taskPriority ||
      !this.taskStatus ||
      !this.taskAssignedTo ||
      !this.taskDueDate ||
      this.isDueDateInvalid(this.taskDueDate)
    );
  }

  

  saveTask(): void {
    const task: Task = {
      id: this.taskId ?? Math.floor(Math.random() * 1000), // Use nullish coalescing
      name: this.taskName,
      description: this.taskDescription,
      details: this.taskDetails,
      priority: this.taskPriority,
      status: this.taskStatus,
      assignedTo: this.taskAssignedTo,
      dueDate: this.taskDueDate
    };

    if (this.taskId) {
      // Update existing task
      this.taskService.updateTask(task);
    } else {
      // Add new task
      this.taskService.addTask(task);
    }

    this.router.navigate(['/']);
  }
}
