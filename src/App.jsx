import React from "react";

const App = () => {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Navbar */}
      <nav className="bg-blue-700 text-white fixed top-0 left-0 w-full z-50 shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">WebGenix</h1>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-gray-200">Home</a></li>
            <li><a href="#services" className="hover:text-gray-200">Services</a></li>
            <li><a href="#expertise" className="hover:text-gray-200">Expertise</a></li>
            <li><a href="#values" className="hover:text-gray-200">Values</a></li>
            <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-700 to-blue-500 text-white pt-20">
        <h2 className="text-5xl font-extrabold mb-4">WebGenix</h2>
        <p className="text-xl mb-6">"Turning big ideas into real digital solutions"</p>
        <p className="max-w-2xl mb-6">
          We are a passionate team committed to delivering innovative Web, AI, 
          and App Development solutions. Our mission is to bring futuristic 
          ideas into practical solutions.
        </p>
        <div className="flex space-x-4">
          <a href="#services" className="px-6 py-3 rounded-full bg-white text-blue-700 font-semibold hover:bg-gray-100">View Our Work</a>
          <a href="#contact" className="px-6 py-3 rounded-full border-2 border-white font-semibold hover:bg-blue-600">Start Your Project</a>
        </div>

        {/* Services badges */}
        <div id="services" className="flex flex-wrap justify-center mt-10 gap-3">
          {["Custom Project Development","Ready-made Solutions","Web App Engineering","Project Consultancy","UI/UX Design","MVP Launch Services"].map((item, i) => (
            <span key={i} className="px-4 py-2 bg-white text-blue-700 rounded-full text-sm font-medium shadow hover:bg-gray-100 cursor-pointer">{item}</span>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-4 text-blue-700">Our Expertise</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Social Media Expert","IoT Solutions","Machine Learning",
              "AI Integration","Web Development","App Development",
              "Custom Software Development","UI & UX Design"
            ].map((title, i) => (
              <div key={i} className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
                <h4 className="text-lg font-semibold text-blue-700 mb-2">{title}</h4>
                <p className="text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Solutions tailored to your business.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 bg-blue-50 text-center">
        <h3 className="text-3xl font-bold mb-6 text-blue-700">Our Values</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {["Quality Assurance","Reliable Delivery","Authenticity","Scalability"].map((value, i) => (
            <div key={i} className="px-6 py-3 bg-white border border-blue-200 rounded-lg shadow hover:shadow-md">
              <p className="font-semibold text-blue-700">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-blue-700 to-blue-500 text-white text-center">
        <h3 className="text-3xl font-bold mb-6">Get A Free Consultation</h3>
        <p className="max-w-2xl mx-auto mb-8">
          Ready to bring your ideas to life? Contact us today and let’s build something amazing together.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-white text-blue-700 p-6 rounded-lg shadow w-64">
            <p className="font-semibold">Email</p>
            <p>info@webgenix.com</p>
          </div>
          <div className="bg-white text-blue-700 p-6 rounded-lg shadow w-64">
            <p className="font-semibold">Phone</p>
            <p>+92 333 2186309</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="font-bold mb-3">CONTACT</h4>
            <p>info@webgenix.com</p>
            <p>+92 334 9251936</p>
          </div>
          <div>
            <h4 className="font-bold mb-3">LINKS</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#services" className="hover:underline">Our Work</a></li>
              <li><a href="#contact" className="hover:underline">Book a Consultation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">SERVICES</h4>
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Brand Strategy</li>
              <li>SEO & Optimization</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-gray-300 mt-10">
          © 2024 WebGenix. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App; 
