import React from 'react';
import CheckBox from './checkbox/checkBox';
import './App.css';
import Variant from './checkbox/variant';

function handler() {
  console.log('Clicked');
}

function App() {
  return (
    <>
      <CheckBox id='ch1' label='CheckBox' onclick={handler} gap='space-x-6' width='w-7' height='h-7' textSize='text-2xl' variant={Variant.DEFAULT}/>
    </>
  );
}

export default App;
