import React from 'react';
import {render, fireEvent } from '@testing-library/react';
import Todo from './Todo';

//Smoke Test
it("SMOKE: renders without crashing", () => {
    render(<Todo />);
  });
  
//Snapshot test
it("SNAP: matches snapshot", () => {
    const {asFragment} = render(<Todo />);
    expect(asFragment).toMatchSnapshot();
  });