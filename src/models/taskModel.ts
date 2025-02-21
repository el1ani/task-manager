export class TaskModel {
    id: number;
    title: string;
    description: string;
    completed: boolean;

    constructor(id: number, title: string, description: string, completed: boolean = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }

    save(): void {
        // Logic to save the task to the data source
    }

    static findAll(): TaskModel[] {
        // Logic to retrieve all tasks from the data source
        return [];
    }

    static findById(id: number): TaskModel | null {
        // Logic to find a task by its ID
        return null;
    }

    static delete(id: number): void {
        // Logic to delete a task by its ID
    }
}