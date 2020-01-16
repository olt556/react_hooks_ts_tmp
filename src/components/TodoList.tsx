import * as React from 'react';
import { useState } from 'react';
import * as styles from '../scss/app.scss'

const getDate: String = Date();
function getTodoList(todoList: Array<Object>){
	return todoList.map((todo, index) =>
		<span
			className={ styles.todo }
			key={ index }
		>
			<p className={ styles.todo__text }>
				{ todo }
			</p>
			<p className={ styles.todo__date }>
				{ getDate }
			</p>
		</span>
	);
}
function TodoList(){
	const [count, setCount] = useState(0);
	const [todoList, setTodos] = useState(Array());

	return (
		<div>
			<p>Today's</p>
			<p>{ getDate }</p>
			{ getTodoList(todoList) }
			<textarea className="todoTextArea" inputMode="text"></textarea>
			<button onClick={() => {
				const textArea: HTMLInputElement = document.querySelector('.todoTextArea');
				if (textArea.value !== '') {
					todoList.push(textArea.value);
					setTodos(todoList)
					console.log(todoList[count]);
				}
				setCount(count + 1);
				}}>
				Post To Do
			</button>
		</div>
	);
}

export default TodoList;