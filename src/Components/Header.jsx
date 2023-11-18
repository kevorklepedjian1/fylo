import React from 'react';
import logo from '../images/logo.svg'



function Header() {
  return (
    <header className="flex items-center justify-between p-8 max-w-7xl mx-auto">
    <div>
      <img src={logo} alt="Fylo" className="logo  lg:w-auto" />
    </div>
    <nav>
      <ul className="flex items-center justify-center gap-2 lg:gap-8">
        <li><button>Features</button></li>
        <li><button>Team</button></li>
        <li><button>Sign In</button></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header