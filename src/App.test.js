import { render } from '@testing-library/react';
import App from './App';
import React from "react";

test('Check for columns number', () => {
   const {container} = render(<App />);

   new Promise((resolve) => {
     setTimeout(resolve, 500)
   }).then(() => {
     const rows = container.getElementsByClassName('row');
     const columns = rows.length && rows[0].getElementsByClassName('board-card');
     expect(columns.length).toBe(4)
   })
});
