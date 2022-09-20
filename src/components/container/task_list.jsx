import React, { useEffect, useState } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponet from '../pure/task';
import TaskForm from '../pure/forms/taskForm';


const TaskListComponent = () => {

    const defaultTask = new Task('Example', ' Default description', false, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', ' Default description 2', true, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', ' Default description 3', true, LEVELS.BLOCKING);

    const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Task state updating");
        setLoading(false);
        return () => {
            console.log("TaskList component down");
        };
    }, [tasks]);

    const completeTask = (task) => {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        setTasks(tempTasks);
        console.log("Task is complete: ", task);
    }

    const deleteTask = (task) => {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];        
        tempTasks.splice(index, 1);
        setTasks(tempTasks);

        console.log("Task is deleted: ", task);
    }

    const addTask = (task) => {
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];        
        tempTasks.push(task);
        setTasks(tempTasks);

        console.log("Task is add: ", task);
    }
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5> Your task: </h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task, index) => {
                                    return (<TaskComponet 
                                        key={index} 
                                        task={task} 
                                        completed={completeTask} 
                                        deleted={deleteTask}></TaskComponet>)
                                })}                                
                            </tbody>
                        </table>
                    </div>
                    <TaskForm add={addTask}></TaskForm>
                </div>

            </div>
        </div>
    );
};

export default TaskListComponent;
