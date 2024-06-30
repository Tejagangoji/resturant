import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';

/* function withnav() {
  return (
    <>
      <Navbarcomponen />
      <Outlet />
    </>
  )
} */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' Component={withnav}>
            <Route exact path='/' Component={Home} />
          </Route> */}
          <Route path='/register' Component={Register} />
          <Route path='/login' Component={Login} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
