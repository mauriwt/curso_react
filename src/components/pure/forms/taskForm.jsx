import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({ add }) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const leverRef = useRef(LEVELS.NORMAL);

    const addTask = (e) => {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            leverRef.current.value
        );
        add(newTask);
    }
    return (
        <form onSubmit={addTask} className='d-flex justify-content-center aling-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input placeholder='Name' ref={nameRef} id='inputName' type='text' className='form-control form-control-sm' required autoFocus ></input>
                <input placeholder='Description' ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-sm' required ></input>
                <select className='form-select form-select-sm' ref={leverRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                    <option selected>Select Priority</option>
                    <option value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option value={LEVELS.URGENT}>
                        Urgent
                    </option>
                    <option value={LEVELS.BLOCKING}>
                        Blocking
                    </option>
                </select>
                <button type='submit' className='btn btn-success btn-sm' >Add Task</button>
            </div>
        </form>
    );
}

TaskForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default TaskForm;
