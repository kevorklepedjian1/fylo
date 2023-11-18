import React from 'react'
import logo from '../images/logo.svg'

const Footer = () => {
    return (
      <footer className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <article className="mb-8">
            <img src={logo} className='text-white' alt="" />
          </article>
          <div className="md:grid grid-cols-3 gap-8 lg:grid-cols-4">
            <article className="mb-8">
              <ul>
                <li className="flex items-center gap-2 text-white mb-4">
                  <img src="./images/icon-phone.svg" alt="" />Phone:
                  +1-543-123-4567
                </li>
                <li className="flex items-center gap-2 text-white">
                  <img src="./images/icon-email.svg" alt="" />example@fylo.com
                </li>
              </ul>
            </article>
            <article>
              <ul>
                <li>
                  <button className="text-white font-normal mb-3">About Us</button>
                </li>
                <li><button className="text-white font-normal mb-3">Jobs</button></li>
                <li>
                  <button className="text-white font-normal mb-3">Press</button>
                </li>
                <li><button className="text-white font-normal mb-3">Blog</button></li>
              </ul>
            </article>
            <article className="mt-8 md:mt-0">
              <ul>
                <li>
                  <button className="text-white font-normal mb-3">Contact Us</button>
                </li>
                <li>
                  <button className="text-white font-normal mb-3">Terms</button>
                </li>
                <li>
                  <button className="text-white font-normal mb-3">Privacy</button>
                </li>
              </ul>
            </article>
            <article className="mt-8 lg:mt-0">
              <ul className="flex items-center justify-center gap-6 md:justify-start">
                <li><i className="fab fa-facebook text-white"></i></li>
                <li><i className="fab fa-twitter text-white"></i></li>
                <li><i className="fab fa-instagram text-white"></i></li>
              </ul>
            </article>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  