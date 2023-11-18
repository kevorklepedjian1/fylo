import React from 'react'

// CtaSection Component (Continued)
const CtaSection = () => {
    return (
      <section className="cta py-20 px-8">
        <div className="text-center md:grid md:grid-cols-2 md:gap-16 md:text-left md:place-items-center max-w-7xl mx-auto">
          <article>
            <h2 className="text-white mb-8 font-bold text-2xl md:text-3xl lg:text-4xl">
              Get early access today
            </h2>
            <p className="text-white mb-10">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </article>
          <form>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@example.com"
              required
              className="w-full rounded py-3 px-4"
            />
            <button
              type="submit"
              className="btn text-sm py-3 px-4 rounded mt-4 w-full text-white font-bold tracking-wide lg:w-7/12"
            >
              Get Started For Free
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default CtaSection;
  