import * as React from 'react';
import { render } from 'react-dom';
import TodoList  from './components/TodoList';
function Main() {
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

export default Main;
