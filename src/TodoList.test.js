import React from 'react';
import {render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';


//Smoke Test
it("SMOKE: renders without crashing", () => {
    render(<TodoList />);
  });
  
//Snapshot test
it("SNAP: matches snapshot", () => {
    const {asFragment} = render(<TodoList />);
    expect(asFragment).toMatchSnapshot();
  });

it("creates a todo", function() {
    const {container } = render( <TodoList />);

    const button = container.querySelector("button");
    let task = screen.getByPlaceholderText('task');


    task.nodeValue="My new todo";


    fireEvent.click(button);

    const newTodo = container.querySelector("li.Todo");
    expect(newTodo).toBeInTheDocument()
    const dltButton = container.querySelector("span.DeleteButton");

    fireEvent.click(dltButton);

    expect(newTodo).not.toBeInTheDocument();

})

