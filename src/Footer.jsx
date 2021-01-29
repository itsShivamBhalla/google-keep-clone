import React from 'react';


const Footer =()=>
{
    const year = new Date().getFullYear();





    return(
        <>
        <footer className='footer'>
             <p>Copyright © {year} @SB</p>
        </footer>
        
        </>

    )
}

export default Footer;