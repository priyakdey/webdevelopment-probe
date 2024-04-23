import { Task } from "../types/task.js"

export function generateMockInCompleteTasks() {
    return [
        new Task(1, "task1", "incomplete", "2024-04-24", 1),
        new Task(2, "task2", "incomplete", "2024-04-24", 4),
        new Task(3, "task3", "incomplete", "2024-04-24", 2),
        new Task(4, "task4", "incomplete", "2024-04-24", 3),
        new Task(5, "task5", "incomplete", "2024-04-24", 5),
    ];
}