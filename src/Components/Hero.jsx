import React from 'react'
import illustration from '../images/illustration-1.svg'


const Hero = () => {
    return (
      <section className="flex flex-col-reverse px-8 py-20 md:grid md:grid-cols-2 md:place-items-center gap-8 max-w-7xl mx-auto">
        <article className="text-center md:text-left">
          <h1 className="font-bold text-4xl mb-8">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="mb-10">
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
          <form className="lg:flex items-center gap-2">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
              required
              className="border border-gray-800 rounded py-3 px-4 text-sm w-full lg:w-7/12"
            />
            <button
              type="submit"
              className="btn mt-4 lg:mt-0 w-full py-3 px-4 text-sm text-white font-bold tracking-wide rounded shadow lg:w-auto"
            >
              Get Started
            </button>
          </form>
        </article>
        <article>
          <img src={illustration} alt="" />
        </article>
      </section>
    );
  };
  
  export default Hero;