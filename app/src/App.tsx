import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import LoginComponent from './frontend/LoginComponent';

const LoginRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" Component={LoginComponent} />
      {/* 他のルートもここに追加できます。例: */}
      {/* <Route path="/dashboard" component={DashboardComponent} /> */}
    </Routes>
  );
};

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <BrowserRouter>
          <LoginRoute></LoginRoute>
        </BrowserRouter>
      </nav>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App