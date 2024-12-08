import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule, ThemeSwitcherComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css' // Check this path
})
export class HeaderComponent {

  addTasks() {
    localStorage.setItem('tasks', JSON.stringify([
      {
        "id": 958,
        "name": "Update Project Documentation",
        "description": "Update the project’s README file and architecture diagrams.",
        "details": "Ensure all team members have access to the updated document repository.",
        "priority": "High",
        "status": "Completed",
        "assignedTo": "Hamza",
        "dueDate": "2025-01-01"
      },
      {
        "id": 118,
        "name": "Create Login Page",
        "description": "Develop the login page with email and password fields.",
        "details": "- Use React for UI.\n- Implement validation for input fields.",
        "priority": "High",
        "status": "In Progress",
        "assignedTo": "Yazan",
        "dueDate": "2025-01-01"
      },
      {
        "id": 655,
        "name": "Design Home Page",
        "description": "Create a responsive home page design for the website.\t",
        "details": "- Use Figma for design.\n- Include sections for banner, features, and CTA.",
        "priority": "High",
        "status": "In Progress",
        "assignedTo": "Mohammad",
        "dueDate": "2025-01-01"
      },
      {
        "id": 679,
        "name": "Fix Backend Bug\t",
        "description": "Resolve 500 error occurring in API when fetching user data.",
        "details": "- Identify root cause using logs.\n- Fix query optimization in backend.",
        "priority": "Medium",
        "status": "In Progress",
        "assignedTo": "Sami",
        "dueDate": "2026-01-01"
      },
      {
        "id": 772,
        "name": "Add Search Functionality\t",
        "description": "Implement search feature in product listing page.\t",
        "details": "- Use debounce for search input.\n- Integrate with backend API.",
        "priority": "Low",
        "status": "In Progress",
        "assignedTo": "Tal",
        "dueDate": "2025-01-01"
      },
      {
        "id": 111,
        "name": "Update UI Components\t",
        "description": "Redesign buttons and modals based on new design guidelines.\t",
        "details": "- Follow design system.\n- Test responsiveness across devices.",
        "priority": "Low",
        "status": "In Progress",
        "assignedTo": "Tal",
        "dueDate": "2025-01-01"
      },
      {
        "id": 113,
        "name": "Write Unit Tests\t",
        "description": "Add Jest unit tests for the User Management module.",
        "details": "- Cover all CRUD operations.\n- Target at least 85% test coverage.",
        "priority": "Low",
        "status": "In Progress",
        "assignedTo": "Tal",
        "dueDate": "2026-01-01"
      },
      {
        "id": 663,
        "name": "Optimize Database Queries\t",
        "description": "Optimize slow-running SQL queries for reports generation.",
        "details": "- Use indexing.\n- Analyze slow query logs.",
        "priority": "High",
        "status": "In Progress",
        "assignedTo": "Sami",
        "dueDate": "2025-01-01"
      },
      {
        "id": 343,
        "name": "Deploy Staging Environment\t",
        "description": "Set up and deploy the latest app changes to staging for QA testing.",
        "details": "- Use Jenkins pipeline.\n- Notify QA team post-deployment.",
        "priority": "High",
        "status": "In Progress",
        "assignedTo": "Sami",
        "dueDate": "2025-01-01"
      },
      {
        "id": 427,
        "name": "Write Documentation\t",
        "description": "Document API endpoints for the Payment Gateway Integration module.\t",
        "details": "- Use Swagger or Postman.\n- Include examples for each endpoint.",
        "priority": "Medium",
        "status": "In Progress",
        "assignedTo": "Mohammad",
        "dueDate": "2025-01-02"
      },
      {
        "id": 695,
        "name": "Create Report Templates\t",
        "description": "Develop Excel report templates for monthly sales analysis.",
        "details": "- Automate with macros.\n- Include charts and summary sections.",
        "priority": "Low",
        "status": "In Progress",
        "assignedTo": "Yazan",
        "dueDate": "2025-01-01"
      },
      {
        "id": 788,
        "name": "Integrate Analytics\t",
        "description": "Add Google Analytics to track page views and user interactions on the site.",
        "details": "- Use Google Tag Manager.\n- Configure events for tracking buttons.",
        "priority": "Low",
        "status": "In Progress",
        "assignedTo": "Sami",
        "dueDate": "2026-02-01"
      }
    ]));

    location.reload();

  }
}

