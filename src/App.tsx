import React from 'react';
import CheckBox from './checkbox/checkBox';
import './App.css';
import Variant from './checkbox/variant';

function handler(checked: boolean) {
  console.log(checked);
}

function App() {
  return (
    <>
      <CheckBox id='ch1' label='CheckBox' onClick={handler} gap='space-x-6' width='w-7' height='h-7' textSize='text-2xl' />
    </>
  );
}

export default App;
