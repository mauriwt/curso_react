import React, { useEffect, useState } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponet from '../pure/task';


const TaskListComponent = () => {

    const defaultTask = new Task('Example', ' Default description', false, LEVELS.NORMAL);

    const [tasks, setTasks] = useState(defaultTask);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Task state updating");
        setLoading(false);
        return () => {
            console.log("TaskList component down");
        };
    }, [tasks]);

    const changeComplete = () => {
        console.log("Cambiar estado");
    }
    return (
        <div>
            <h1> Your task: </h1>
            <TaskComponet task={defaultTask}></TaskComponet>
        </div>
    );
};

export default TaskListComponent;
