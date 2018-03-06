import React from 'react';
import style from './Todo.css';
const Todo = ({todo, remove}) => {
	console.log(todo,remove);
	return (
		<div className={style.Todo}>
		<li>
			{todo.text} <button type="button" onClick={() =>remove(todo.id)}> Delete </button>
		</li>
		</div>
	);
}

export default Todo;