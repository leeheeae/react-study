import React, { useState } from 'react';
import Info from './Info';
import Info2 from './Info2';
import Counter2 from './Counter2';
import Average from './Average';

const App = () => {
  const [visible, setvisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setvisible(!visible);
        }}
      >
        {visible ? '숨기기!' : '보이기!'}
      </button>
      <hr />
      {visible && <Info />}
      <Counter2 />
      <Info2 />
      <Average />
    </div>
  );
};

export default App;
