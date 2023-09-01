import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const Mode = () => {
  const [isLit, setLit] = useState(true);

  return (
    <div className={`room ${isLit ? "Lit" : "Dark"} flex flex-col justify-center items-center gap-[1em] w-[100vw] h-[100vh] p-[1em]`}>
      <p className='text-center w-[100%] text-[1em]'>React Modes</p>
      <p className={`bi ${!isLit ? "bi-moon-fill" : "bi-brightness-high-fill"} text-[2em]`}></p>
      <p className='w-[100%] text-center'>The Page Is {isLit ? "Light" : "Dark"}</p>
      <button onClick={() => setLit(!isLit)} className='flex justify-center items-center p-[0.5em]'>
      {isLit ? "Dark" : "Light"}
      </button>
    </div>
  );
};

ReactDOM.render(<Mode />, document.querySelector('#header'));