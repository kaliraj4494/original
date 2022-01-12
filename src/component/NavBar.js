import React from 'react';
 const NavBar =() =>{
     return(
         <div>
             <nav className='ui raised very padded segment'>
                 <a className='ui tealed inverted segment'>Image Search Engine</a>
                 <dev className='ui right floated header'>
                     <button className='ui button' ><a href='/home'>Home</a></button>
                     <button className='ui button' ><a href='/about'>About Us</a></button>
                     <button className='ui button' ><a href='/contact'>Contact Us</a></button>
                 </dev>
             </nav>
         </div>

     )
 }
  export default NavBar;