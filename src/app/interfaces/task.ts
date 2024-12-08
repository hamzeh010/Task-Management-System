export interface Task {
    id: number;
    title?: string;
    description: string;
    name: string;          // Task Name
    priority: string;      // Low, Medium, High
    status: string;        // Pending, In Progress, Completed
    assignedTo: string;    // Dummy users
    dueDate: string; 
    details:string
}
