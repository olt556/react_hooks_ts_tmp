import * as React from 'react';
import { render } from 'react-dom';
import TodoList  from './components/TodoList';

const Main = (): JSX.Element => {
	return (
		<div>
			<TodoList />
		</div>
	);
}

render(
	<Main />,
	document.getElementById('root')
);
