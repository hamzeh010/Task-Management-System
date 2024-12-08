# Task Management System

This is a **Task Management System** built using **Angular** to demonstrate task CRUD operations, responsive design, and state management.

## Table of Contents

1. [Features](#features)
2. [Setup Instructions](#setup-instructions)
3. [Run the Project](#run-the-project)
4. [Technologies Used](#technologies-used)
5. [File Structure](#file-structure)
6. [Assumptions and Limitations](#assumptions-and-limitations)
7. [Stretch Goals](#stretch-goals)

---

## Features

### Functional Requirements
- **Dashboard View**  
  - Displays a table of tasks with:  
    - Task Name, Description, Priority, Status, Assigned To, Due Date, and Actions (View/Edit/Delete).  
- **Add/Edit Task**  
  - Form with validation:  
    - Task Name: Required, max 50 characters  
    - Description: Optional, max 200 characters  
    - Priority: Dropdown (Low, Medium, High)  
    - Status: Dropdown (Pending, In Progress, Completed)  
    - Assigned To: Dropdown with dummy users  
    - Due Date: Required, no past dates allowed  
- **View Task**  
  - Read-only task details view.  
- **Delete Task**  
  - Confirmation modal before deletion.  
- **Search & Filter**  
  - Search tasks by name or description.  
  - Filter tasks by priority, status, or assigned user.  
- **Drag-and-Drop Status Update**  
  - Move tasks across columns (Pending, In Progress, Completed).  

### Technical Requirements
- **Lazy-Loaded Routes**:
  - `/tasks`: List all tasks.  
  - `/tasks/add`: Add task.  
  - `/tasks/:id/edit`: Edit task.  
  - `/tasks/:id`: View task details.  
- **State Management**  
  - Implemented using NgRx/BehaviorSubject for task state management.  
- **Reusable Services**  
  - `TaskService` for CRUD operations.  
  - `UserService` for fetching dummy user data.  
- **Unit Testing**  
  - Unit tests for two components and one service using Jasmine/Karma.  
- **Responsive Design**  
  - Built using Angular Material for a clean and responsive UI.  

---

## Setup Instructions

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/hamzeh010/Task-Management-System
   cd task-management-system
   ```

2. **Install dependencies**:  
   Ensure you have Node.js and Angular CLI installed, then run:  
   ```bash
   npm install
   ```

---

## Run the Project

- Start the development server:  
   ```bash
   ng serve
   ```
- Navigate to `http://localhost:4200/` to view the app.

- **Build the project for production**:  
   ```bash
   ng build
   ```

---

## Technologies Used

- **Angular** (v19)  
- **Angular Material**  
- **NgRx** (or BehaviorSubject for state management)  
- **RxJS**  
- **Karma/Jasmine** for testing  
- **TypeScript**  

---

## File Structure

```
src/
|-- app/
|   |-- components/
|   |   |-- task-list/         # Task list component
|   |   |-- task-form/         # Add/Edit task form component
|   |   |-- task-details/      # View task details component
|   |   |-- header/            # Header navigation
|   |
|   |-- services/
|   |   |-- task.service.ts    # Task CRUD service
|   |   |-- user.service.ts    # Dummy user service
|   |
|   |-- state/                 # NgRx store setup (optional)
|   |
|   |-- app-routing.module.ts  # Routing configuration
|   |-- app.module.ts          # Module declarations
|
|-- assets/                    # Static assets
|-- environments/              # Environment configurations
|-- index.html                 # Main HTML file
|-- styles.css                 # Global styles
```

---

## Assumptions and Limitations

- Dummy user data is hardcoded in `UserService`.  
- Tasks are managed in-memory and reset on app reload.  
- State management uses either NgRx or BehaviorSubject based on requirements.  
- Pagination and dark mode are optional stretch goals not implemented by default.  

---

## Stretch Goals

The following can be implemented for future improvements:
1. **Task History**: Track changes made to tasks and display a log.  
2. **Pagination**: Add pagination for large task lists.  
3. **Dark Mode**: Implement a theme toggle feature.  

---

## Testing

Run unit tests using:  
```bash
npm test
```

---

## Author

- **Hamza Al-Salhi**  
- Email: hamzehsalhi92@gmail.com
- LinkedIn: https://www.linkedin.com/in/hamza-al-salhi-a504b8b2/

---

Happy Coding! 🚀
