import Navbar from './Navbar';
import Introduction from './introduction'
import Profile from './profile';
import Footer from './Footer';
import Button from './Button';
import React, { useState } from 'react';


function Home() {
  const [getNavbarMenuValue, setNavbarMenuValue] = useState("")

    const klikButton = () => {
    setNavbarMenuValue("Contact");
  }

    return ( 
        <div>
            <Navbar contactNavbar= {getNavbarMenuValue}/>
            <Profile />
            <Introduction hobi="coding" />
            <Introduction hobi="main game" />
            {/* <button onClick={() => klikButton()}>Klik</button> */}
            <Button klik= {() => klikButton()} />
            <Footer />
        </div>
     );
}

export default Home;