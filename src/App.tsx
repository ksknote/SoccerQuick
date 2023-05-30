import * as React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import TeamPage from './Components/TeamPage/TeamPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/teampage" element={<TeamPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
