import React from 'react';
import "./styles/css/app.css";
import Button from '@mui/material/Button';
import TestComponent from './components/test/TestComponent';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <h1>Setup</h1>
      <Button variant="contained">MaterialUI</Button>
      <TestComponent></TestComponent>
    </>
  );
}

export default App;
