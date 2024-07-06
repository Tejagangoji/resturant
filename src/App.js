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
import Wholemenu from './Pages/Wholemenu';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Address from './Pages/Address';
import Context from './context/Context';
import Payment from './Pages/Payment';
import Orderfail from './Pages/Orderfail';

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
        <Context>
          <Routes>
            <Route exact path='/' Component={withnav}>
              <Route exact path='/' Component={Landing} />
            </Route>
            <Route exact path='/menu/:category' Component={withnav}>
              <Route exact path='/menu/:category' Component={Menu} />
            </Route>
            <Route exact path='/menu' Component={withnav}>
              <Route exact path='/menu' Component={Wholemenu} />
            </Route>
            <Route exact path='/contact' Component={withnav}>
              <Route exact path='/contact' Component={Contact} />
            </Route>
            <Route exact path='/cart' Component={withnav}>
              <Route exact path='/cart' Component={Cart} />
            </Route>
            <Route exact path='/address' Component={withnav}>
              <Route exact path='/address' Component={Address} />
            </Route>
            <Route exact path='/payment' Component={withnav}>
              <Route exact path='/payment' Component={Payment} />
            </Route>
            <Route exact path='/orderfail' Component={withnav}>
              <Route exact path='/orderfail' Component={Orderfail} />
            </Route>
            <Route path='/register' Component={Register} />
            <Route path='/login' Component={Login} />
            {/* admin */}
            <Route path='/admin' Component={Home} />
            <Route path='/adminlogin' Component={Adminlogin} />
            <Route path='/product' Component={Products} />
            <Route path='/adminorder' Component={Adminorders} />
          </Routes>
        </Context>
      </BrowserRouter>
    </div >
  );
}

export default App;
