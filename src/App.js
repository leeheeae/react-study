import { Fragment }from 'react';
import './App.css';

function App() {
  const name = "리액트"
  const number = 0;
  const name2 = undefined;
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16
  }
  return (
    <>
      {/* name === '리액트' ? (<h1>리액트입니다.</h1>: null) */}
      {name === '리액트' && <h1>리액트입니다.</h1>}
      {number && <div>내용</div>}
      {name2 || '리액트'}

      <div style={style}>{name}</div>

      <div style={{
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: 16
      }}
      >
        {name}
      </div>

      <div className="react">{name}</div>

      <input />
    </>
  );
  //return <div style={style}>{name}</div>
  // return name2 || '값이 undefined 입니다';
}

export default App;
