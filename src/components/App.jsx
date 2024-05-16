import React, { Suspense } from 'react';
import Profiles from './Profiles';
import './App.css';

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Profiles />
      </Suspense>
    </div>
  );
}

export default App;
