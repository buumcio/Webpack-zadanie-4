import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = ({todos, removeTodo}) => {
    const taskList = todos.map((todo) => {
        return (<Todo todo={todo} key={todo.id} remove={removeTodo} />)
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