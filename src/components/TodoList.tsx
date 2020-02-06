import * as React from 'react';
import { useState } from 'react';
import * as styles from '../scss/app.scss'

const getTodoListElm = (todoList: Array<string>, date: Array<string>): Array<JSX.Element> => {
	return todoList.map((todo: string, index: number) =>
		<span
			className={ styles.todo }
			key={ index }
		>
			{ todo !== '' &&
				<p className={ styles.todo__text }>
					{ todo }
				</p>
			}
			{ todo !== '' &&
				<p className={ styles.todo__date }>
					{ date[index] }
				</p>
			}
		</span>
	);
}

const TodoList = (): JSX.Element => {
	// no rerendering without row variable updating
	const [update, updateState] = useState(0);
	const [todoList, setTodos] = useState(Array(''));
	const [date, setDate] = useState(Array(Date()));

	const stateValueUpdate = (): void => {
		if (update === 0) {
			updateState(1);
		} else {
			updateState(0);
		}
	}
	const setStateTodoList = (): void => {
		const textArea: HTMLInputElement = document.querySelector('.todoTextArea');
		todoList.push(textArea.value);
		setTodos(todoList);
		date.push(Date());
		setDate(date);
		stateValueUpdate();
	}

	return (
		<div>
			<p>Today's</p>
			{ getTodoListElm(todoList, date) }
			<textarea className="todoTextArea" inputMode="text"></textarea>
			<button onClick={ setStateTodoList }
			>
			Post To Do
			</button>
		</div>
	);
}

export default TodoList;
