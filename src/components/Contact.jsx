import React from 'react';

const Contact = () => {
  return (
    <section 
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-16 text-gray-200"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-6">Contact Me</h2>
        <p className="text-gray-400 mb-10 text-lg">
          Have a question or want to collaborate? Let’s connect!
        </p>

        <form
          action="https://formsubmit.co/yadavji9755@gmail.com"
          method="POST"
          className="bg-gray-800 rounded-xl shadow-lg shadow-yellow-500/10 p-6 space-y-6"
        >
          <input type="hidden" name="_captcha" value="false" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-gray-400 text-sm space-y-1">
          <p><strong>Email:</strong> yadavji9755@gmail.com</p>
          <p><strong>Location:</strong> Bhopal, Madhya Pradesh</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
