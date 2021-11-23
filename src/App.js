
import {
 
  Route,
 
  Switch
} from 'react-router-dom';
import './App.css'
import Home from './component/NavBar/Home';
import About from './component/NavBar/About';
import Free from './component/NavBar/Free';
import Contact from './component/NavBar/ContactUs';
 import PageNotFound from './component/PageNotFound';
 import React from 'react';
import TopHeader from './component/Top_Header/TopHeader';
import NavBar from './component/NavBar/NabBar';
import { Footer } from './component/Footer';
import { BottomNavBar } from './component/homeComponent/BottomNavBar';
import { DetailsOfItems } from './component/homeComponent/Details';
import Login from './Login/Login';


const App = () => {
  return (
    <>
    <TopHeader/>
    <NavBar/>
     <Switch>
     
        <Route exact path="/" component={Home} />
        <Route exact path="/details" component={DetailsOfItems} />
        <Route exact path="/about" component={About} />
        <Route exact path="/free" component={Free} />
        <Route exact path="/login" component={Login} />

         <Route exact path="/contact" component={Contact} />
         <Route component={PageNotFound} />
      
   </Switch>
   < BottomNavBar/>
   <Footer/>

      
    </>
  )


}

export default App
