import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { Task } from '../../../interfaces/task';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [CommonModule, RouterModule], // Use RouterModule for RouterLink
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  taskId: number | null = null;
  task: Task | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap?.subscribe(params => {
      this.taskId = Number(params.get('id'));
      const tasks: Task[] = JSON.parse(localStorage.getItem('tasks')!) || [];
      this.task = tasks.find(t => t.id === this.taskId);

      if (!this.task) {
        console.error('Task not found');
        this.router.navigate(['/']);
      }
    });
  }
}
