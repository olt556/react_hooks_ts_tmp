import * as React from 'react';
import { useState } from 'react';
import * as styles from '../scss/todoList.scss';

const getTodoListElm = (todoList: Array<string>, date: Array<string>): Array<JSX.Element> => {
	return todoList.map((todo: string, index: number) => 
		<span
			className={ styles.todo }
			key={ index }
		>
			{ todo !== '' &&
				<p className={ styles.todo__text }>{ todo }</p>
			}
			{ todo !== '' &&
				<p className={ styles.todo__date }>{ date[index] }</p>
			}
		</span>
	);
}

const TodoList = (): JSX.Element => {
	// no rerendering without row variable updating
	const [update, updateState] = useState(0);
	const [todoList, setTodos] = useState(Array(''));
	const [date, setDate] = useState(Array(Date()));
	const [textData, setTextData] = useState('');

	const stateValueUpdate = (): void => {
		if (update === 0) {
			updateState(1);
		} else {
			updateState(0);
		}
	}
	const setStateTodoList = (): void => {
		todoList.push(textData);
		setTodos(todoList);
		date.push(Date());
		setDate(date);
		stateValueUpdate();
	}
	const changeStateTextArea = (e: HTMLTextAreaElement): void => {
		const textAreaStr: string = e.value
		setTextData(textAreaStr);
	}

	return (
		<div>
			<p>Today's</p>
			{ getTodoListElm(todoList, date) }
			<div className={ styles.displayFlex }>
				<textarea 
					className={ styles.todo__textArea } 
					onChange={ e => { changeStateTextArea(e.currentTarget) } } 
					inputMode="text">
				</textarea>
				<button className={ styles.ml5 } onClick={ setStateTodoList }>
					Post To Do
				</button>
			</div>
		</div>
	);
}

export default TodoList;