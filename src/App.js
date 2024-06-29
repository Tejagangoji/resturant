import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
