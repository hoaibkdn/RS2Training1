/** @format */

import React, { useState } from 'react';
import './App.css';
import { ListPosts, Example, Login } from './pages';

function App() {
  const [forceRerender, updateForceRedender] = useState(0);
  return (
    <>
      <Login />
      {forceRerender < 1 ? (
        <Example name={{ value: 'Example', id: 1 }} />
      ) : null}
      <button onClick={() => updateForceRedender(forceRerender + 1)}>
        Force Rerender {forceRerender}
      </button>
      <ListPosts />
    </>
  );
}

export default App;
