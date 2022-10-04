import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate
} from 'react-router-dom';
import HomePage from './app/screenpages/HomePage';
import CoinsPage from './app/screenpages/coinsPage';

function App() {
  return (
   <Router>
        <Routes>
        {/* <Route path="/home" element={<HomePage/>} /> */}
        <Route path="/" element={<HomePage/>}  />
        <Route path="/coin/:uuid" element={<CoinsPage />} />
        </Routes>
</Router>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default App;
