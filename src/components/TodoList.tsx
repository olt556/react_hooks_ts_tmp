import * as React from 'react';
import { useState } from 'react';
function getTodoList(todoList: Array<Object>){
	return todoList.map((todo, index) =>
		<p key={index}>{todo}</p>
	);
}
const getDate: String = Date();
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