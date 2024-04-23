import { Task } from "../types/task.js"

export function generateMockIncompleteTasks() {
    return [
        new Task(1, "task1", "incomplete", "2024-04-24", 1),
        new Task(2, "task2", "incomplete", "2024-04-24", 4),
        new Task(3, "task3", "incomplete", "2024-04-24", 2),
        new Task(4, "task4", "incomplete", "2024-04-24", 3),
        new Task(5, "task5", "incomplete", "2024-04-24", 5),
        new Task(50, "task5", "incomplete", "2024-04-24", 5),
        new Task(6, "task5", "incomplete", "2024-04-24", 5),
        new Task(7, "task5", "incomplete", "2024-04-24", 5),
        new Task(8, "task5", "incomplete", "2024-04-24", 5),
        new Task(9, "task5", "incomplete", "2024-04-24", 5),
        new Task(10, "task5", "incomplete", "2024-04-24", 5),
        new Task(11, "task5", "incomplete", "2024-04-24", 5),
        new Task(12, "task5", "incomplete", "2024-04-24", 5),
    ];
}


export function generateMockCompleteTasks() {
    return [
        new Task(13, "task4", "complete", "2024-04-24", 1),
        new Task(14, "task5", "complete", "2024-04-24", 4),
    ];
}