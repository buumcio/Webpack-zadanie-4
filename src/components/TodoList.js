import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = ({todos, remove}) => {
    const taskList = todos.map((todo) => {
        return (<Todo todo={todo} key={todo.id} remove={remove} />)
    });

    return (
        <div className={style.TodoList}>
            <ol>
                {taskList}
            </ol>
        </div>
    );
}

export default TodoList;