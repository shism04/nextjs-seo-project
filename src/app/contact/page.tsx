export default function ContactUsPage() {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg space-y-6">
        <h1 className="text-4xl text-center font-bold text-gray-800">
          Contact Us - We're Here to Help!
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Mercado 360, we value our customers and are always ready to assist with
          any inquiries, concerns, or feedback. Whether you have a question about a
          product, need help with an order, or just want to say hello, we’d love to
          hear from you!
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-lg text-gray-700">Fill out the form below, and we’ll get back to you as soon as possible.</p>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="John Doe"
                required
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="youremail@example.com"
                required
              />
            </div>
  
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg"
                placeholder="Tell us how we can help..."
                required
              ></textarea>
            </div>
  
            <div className="flex justify-center">
              <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold">
                Send Message
              </button>
            </div>
          </form>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-lg text-gray-700">Or reach us through the following channels:</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="mailto:support@mercado360.com" className="text-blue-600 font-semibold">Email Us</a>
            <a href="tel:+1234567890" className="text-blue-600 font-semibold">Call Us</a>
          </div>
        </div>
      </div>
    );
  }
  