import React from 'react';
import {render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

//Smoke Test
it("SMOKE: renders without crashing", () => {
    render(<NewTodoForm />);
  });
  
//Snapshot test
it("SNAP: matches snapshot", () => {
    const {asFragment} = render(<NewTodoForm />);
    expect(asFragment).toMatchSnapshot();
  });