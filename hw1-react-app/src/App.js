import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Count } from './Count';
import { Form } from './form';
import './App.css';


function App() {
  return (
    <>
      <Header />
      <Main />
      <Header />
      <Main />
      <Header />
      <Main />
      <Count />
      <Form />
    </>

  );
}

export default App;
