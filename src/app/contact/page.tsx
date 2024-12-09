// pages/contact.js

export default function Contact() {
    return (
      <div className="bg-black text-white font-sans min-h-screen flex flex-col items-center">
        <section id="contact" className="py-20 px-6 md:px-12 w-full">
          <div className="container mx-auto text-center">
            <h2 className="text-5xl font-display font-bold text-pink-600 mb-6 tracking-wider">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-lg mx-auto">
              I would love to hear your thoughts, ideas, or if you just want to chat! Please fill out the form below or connect with me directly.
            </p>
  
            {/* Contact Form */}
            <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-xl">
              <form action="#" method="POST" className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 block w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-600 shadow-md"
                  />
                </div>
  
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 block w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-600 shadow-md"
                  />
                </div>
  
                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows= {5}
                    required
                    className="mt-2 block w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-600 shadow-md"
                  />
                </div>
  
                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-bold rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
  
            {/* Contact Info */}
            <div className="mt-16 space-y-6 text-lg">
              <p className="text-gray-400">Alternatively, feel free to reach out to me:</p>
              <div className="flex justify-center space-x-6">
                {/* Email */}
                <a href="nimraulfat47@gmail.com" className="text-pink-600 hover:text-pink-400 transition duration-300 ease-in-out transform hover:scale-105">
                  nimraulfat47@gmail.com
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/nimra-ulfat-14a2162b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-400 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  