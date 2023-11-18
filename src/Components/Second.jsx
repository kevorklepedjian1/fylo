import React from 'react'
import illustration from '../images/illustration-2.svg'
import arrow from '../images/icon-arrow.svg'
import quotes from '../images/icon-quotes.svg'
import avatar from '../images/avatar-testimonial.jpg'


const Second = () => {
    return (
      <section style={{ backgroundColor: '#f8f8fe' }} className="px-8 py-20">
        <div className="flex flex-col-reverse gap-16 md:grid md:grid-cols-2 md:gap-16 max-w-7xl mx-auto">
          <article>
            <h2 className="text-center font-bold text-2xl mb-8 md:text-left md:text-3xl lg:text-4xl">
              Stay productive, wherever you are
            </h2>
            <p className="mb-4">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="mb-10">
              Securely share files and folders with friends, family and colleagues
              for live collaboration. No email attachments required!
            </p>
            <a href="#" className="link flex items-center gap-2 underline">
              See how Fylo works
              <img src={arrow} alt="" className="w-5" />
            </a>
            <div className="mt-10 p-8 bg-white shadow rounded">
              <img src={quotes} alt="" className="w-5 mb-4" />
              <p className="mb-10">
                Fylo has improved our team productivity by an order of magnitude.
                Since making the switch our team has become a well-oiled
                collaboration machine.
              </p>
              <aside className="flex items-center justify-start gap-2">
                <img
                  src={avatar}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <ul>
                  <li className="font-bold text-lg text-gray-800">Kyle Burton</li>
                  <li className="text-gray-600 text-sm">Founder & CEO, Huddle</li>
                </ul>
              </aside>
            </div>
          </article>
          <article>
            <img src={illustration} alt="" />
          </article>
        </div>
      </section>
    );
  };
  
  export default Second;
  