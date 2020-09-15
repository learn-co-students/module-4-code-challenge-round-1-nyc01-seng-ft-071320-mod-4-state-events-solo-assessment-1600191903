import React from 'react';
import './App.css';
import Statement from './Statement'
import Image from './Image'

function App() {
  return (
    <>
    <h1>You Can Do This!</h1>
    <Statement yesStatement="google the answer"/>
    <Image yesImage="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQptvy1IuxkMzOgcsR_uWucIkwE67jI04GfUg&usqp=CAU"/>
    </>
  )
}

export default App;
