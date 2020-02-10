import * as React from 'react';
import { render } from 'react-dom';
import TodoList from './components/TodoList';
import TodoList2 from './components/TodoList2';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Main = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={TodoList} />
                <Route path="/todo" component={TodoList2} />
            </Switch>
        </BrowserRouter>
    );
};

render(<Main />, document.getElementById('root'));
