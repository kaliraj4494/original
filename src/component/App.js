import React from 'react';
import Home from './home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './about';
import Contact from './contact';
import NavBar from './NavBar';
   
class App extends React.Component {
 
  render() { 
    return(
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/home' element= {<Home/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/contact' element= {<Contact/>} />
        

      </Routes>
      </BrowserRouter>

    )
      
  
  }
}
 
export default App;