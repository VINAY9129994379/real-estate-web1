import React from 'react';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SignUp from './pages/SignUp';
import Properties from './pages/Properties';
import News from './pages/News';
import Team from './pages/Team';
import Footer from './components/Footer';
import ContactMenu from './pages/ContactMenu';
import AllProperty from './components/AllProperty';
import BuyProperty from './components/BuyProperty';
import RentProperties from './components/RentProperties';
import './App.css'



function App() {
  return (
    <div className='app'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route className='property-nav'>
           <Route path='/properties' element={<Properties/>}/>
            <Route className='property-dropdown'>
              <Route className='property-dropdown-section'>
                <Route path='/all' element={<AllProperty/>}/>
                <Route path='/buy' element={<BuyProperty/>}/>
                <Route path='/rent' element={<RentProperties/>}/>

              </Route>
            </Route>
          </Route>
        
        <Route path='/news' element={<News />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contactmenu' element={<ContactMenu />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
