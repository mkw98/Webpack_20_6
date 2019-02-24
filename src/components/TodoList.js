import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
    const list = props.taskList;
    const task = list.map((task) => 
        <div key={task.id} className={style.TodoTask}>{task.text}</div>
    );

    return(
        <div className={style.TodoList}>
           {task}
        </div>
    );
}

export default TodoList;