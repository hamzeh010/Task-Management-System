import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksSubject: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(this.loadTasks());
  public tasks$ = this.tasksSubject.asObservable();

  constructor() {}

  /**
   * Get current tasks
   */
  getTasks(): Task[] {
    return this.tasksSubject.value;
  }

  /**
   * Add a new task
   */
  addTask(task: Task): void {
    const updatedTasks = [...this.tasksSubject.value, task];
    this.updateTasks(updatedTasks);
  }

  /**
   * Update an existing task
   */
  updateTask(updatedTask: Task): void {
    const updatedTasks = this.tasksSubject.value.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    this.updateTasks(updatedTasks);
  }

  /**
   * Delete a task by ID
   */
  deleteTask(id: number): void {
    const updatedTasks = this.tasksSubject.value.filter((task) => task.id !== id);
    this.updateTasks(updatedTasks);
  }

  /**
   * Update task order
   */
  updateTaskOrder(updatedTasks: Task[]): void {
    this.updateTasks(updatedTasks);
  }

  /**
   * Load tasks from localStorage
   */
  private loadTasks(): Task[] {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
  }

  /**
   * Update tasks in BehaviorSubject and localStorage
   */
  private updateTasks(updatedTasks: Task[]): void {
    this.tasksSubject.next(updatedTasks);
    this.updateLocalStorage(updatedTasks);
  }

  /**
   * Persist tasks to localStorage
   */
  private updateLocalStorage(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
