import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Task } from '../../../interfaces/task';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../dialogs/confirmation-dialog/confirmation-dialog.component';
import { TaskService } from '../../../services/TaskService';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    RouterLink,
    DragDropModule,
    MatSelectModule
  ],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements AfterViewInit, OnInit {
  tasks: Task[] = [];
  uniqueAssignedUsers: string[] = [];
  selectedPriority: string = '';
  selectedStatus: string = '';
  selectedUser: string = '';

  pendingTasks: Task[] = [];
  inProgressTasks: Task[] = [];
  completedTasks: Task[] = [];

  displayedColumns: string[] = [
    'name',
    'description',
    'priority',
    'status',
    'assignedTo',
    'dueDate',
    'actions'
  ];

  dataSource = new MatTableDataSource<Task>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private taskService: TaskService
  ) {
    this.dataSource.filterPredicate = (data: Task, filter: string) =>
      data.name.toLowerCase().includes(filter) ||
      data.description?.toLowerCase().includes(filter);
  }

  ngOnInit(): void {
    this.loadTasks();
    console.log("All Tasks:", this.tasks); // Debug to verify task data

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  private updateTaskColumns(): void {
    this.pendingTasks = this.tasks.filter(task => task.status === 'Pending');
    this.inProgressTasks = this.tasks.filter(task => task.status === 'In Progress');
    this.completedTasks = this.tasks.filter(task => task.status === 'Completed');
  
    console.log("Pending Tasks:", this.pendingTasks);
    console.log("In Progress Tasks:", this.inProgressTasks);
    console.log("Completed Tasks:", this.completedTasks);
  }

  dropTask(event: CdkDragDrop<Task[]>, newStatus: string): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const task = event.previousContainer.data[event.previousIndex];
      task.status = newStatus; // Update status
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.taskService.updateTask(task); // Persist changes
    }
    this.updateTaskColumns(); // Refresh columns
  }

  // Load tasks from the service
  private loadTasks(): void {
    this.tasks = this.taskService.getTasks();
    console.log("Loaded Tasks:", this.tasks); // Debugging step
    this.updateTaskColumns(); // Ensure columns are updated
    this.updateDataSource();  // Update table data
    this.getUniqueUsers();
  }
  

  // Remove task with confirmation dialog
  removeTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '400px',
        data: { message: `Are you sure you want to delete "${task.name}"?` }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.taskService.deleteTask(id);
          this.loadTasks();
        }
      });
    }
  }

  viewTask(id: number): void {
    this.router.navigate(['/tasks', id]);
  }


  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  getUniqueUsers(): void {
    this.uniqueAssignedUsers = Array.from(new Set(this.tasks.map(task => task.assignedTo)));
  }

  applyAllFilters(): void {
    this.dataSource.data = this.tasks.filter(task => {
      return (
        (this.selectedPriority ? task.priority === this.selectedPriority : true) &&
        (this.selectedStatus ? task.status === this.selectedStatus : true) &&
        (this.selectedUser ? task.assignedTo === this.selectedUser : true)
      );
    });
  }

  

  getStatusClass(status: string): string {
    switch (status) {
      case 'Pending':
        return 'status-badge pending';
      case 'In Progress':
        return 'status-badge in-progress';
      case 'Completed':
        return 'status-badge completed';
      default:
        return 'status-badge default';
    }
  }

  filterByPriority(priority: string): void {
    this.selectedPriority = priority;
    this.applyAllFilters();
  }

  filterByStatus(status: string): void {
    this.selectedStatus = status;
    this.applyAllFilters();
  }

  filterByUser(user: string): void {
    this.selectedUser = user;
    this.applyAllFilters();
  }

  private updateDataSource(): void {
    this.dataSource.data = this.tasks;
  }

  
}
