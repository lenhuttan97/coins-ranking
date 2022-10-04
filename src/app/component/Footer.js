import React from 'react'
import '../screenpages/page-css.css';

function Footer() {
  return (
    <div className='footercontainer'>
      <h1> Copyright  02/10/2022</h1>
      <ul>
        <li onClick={() => window.open('https://www.facebook.com/tanle.97/', '_blank', 'noopener,noreferrer')}><ion-icon name="logo-facebook"></ion-icon><a>Facebook</a></li>
        <li onClick={() => window.open('https://github.com/lenhuttan97', '_blank', 'noopener,noreferrer')}><ion-icon name="logo-github"></ion-icon><a>github</a></li>
        <li onClick={() => window.open('mailto:tan.lenhut97@gmail.com', '_blank', 'noopener,noreferrer')}><ion-icon name="logo-github"></ion-icon><a>Mail</a></li>
      </ul>
    </div>
  )
}

export default Footer;