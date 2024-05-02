import { v4 as uuidv4 } from "uuid";


export const TaskStatus = Object.freeze({
    INCOMPLETE: 0,
    COMPLETE: 1,
})

export class Task {
    constructor(title) {
        this.id = uuidv4();
        this.title = title;
        this.status = TaskStatus.COMPLETE;
    }

    markComplete() {
        this.status = TaskStatus.COMPLETE;
    }
}