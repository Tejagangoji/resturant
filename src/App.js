import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navbar from './components/Navbar';
import Landing from './Pages/Landing';
import Footer from './components/Footer';
import Adminlogin from './Pages/admin/Adminlogin';
import Home from './Pages/admin/Home';
import Products from './Pages/admin/Products';
import Adminorders from './Pages/admin/Adminorders';
import Menu from './Pages/Menu';

function withnav() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={withnav}>
            <Route exact path='/' Component={Landing} />
          </Route>
          <Route exact path='/menu/:category' Component={withnav}>
            <Route exact path='/menu/:category' Component={Menu} />
          </Route>
          <Route path='/register' Component={Register} />
          <Route path='/login' Component={Login} />

          {/* admin */}
          <Route path='/admin' Component={Home} />
          <Route path='/adminlogin' Component={Adminlogin} />
          <Route path='/product' Component={Products} />
          <Route path='/adminorder' Component={Adminorders} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
