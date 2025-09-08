import React from "react";
import wgxImage from "./assets/webgenix.png";
import Projects from "./components/Projects";
import Uiprojects from "./components/Uiprojects";


const App = () => {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Navbar */}
      <nav className="bg-blue-700 text-white fixed top-0 left-0 w-full z-50 shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">WebGenix</h1>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-gray-200">Home</a></li>
            <li><a href="#about" className="hover:text-gray-200">About</a></li>
            <li><a href="#services" className="hover:text-gray-200">Services</a></li>
            <li><a href="#projects" className="hover:text-gray-200">Projects</a></li>
            <li><a href="#expertise" className="hover:text-gray-200">Expertise</a></li>
            <li><a href="#values" className="hover:text-gray-200">Values</a></li>
            <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-[rgba(16,108,194,0.9)] to-blue-600 text-white pt-20 px-6"
    >
      {/* Top Image - Circular */}
      <div className="mb-6">
        <img
          src={wgxImage} // <-- apna Webgenix logo/team img laga dena
          alt="Webgenix"
          className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg mx-auto"
        />
      </div>

      {/* Title & Tagline */}
      <h1 className="text-5xl font-extrabold mb-4">WebGenix</h1>
      <p className="text-lg md:text-xl mb-4 font-medium">
        "Learn, Build & Grow with Digital Innovation"
      </p>

      {/* Description */}
      <p className="max-w-2xl mb-6 text-base md:text-lg text-gray-100">
        Webgenix is a platform where students learn <span className="font-semibold">Web Development, 
        Data Science, Graphic Designing</span> and more.  
        We also provide <span className="font-semibold">internships</span> & real-world projects, 
        while delivering <span className="font-semibold">Full Stack Development solutions</span> 
        to clients across the globe.
      </p>

      {/* CTA Buttons */}
      <div className="flex space-x-4">
        <a
          href="#services"
          className="px-6 py-3 rounded-full bg-white text-blue-700 font-semibold hover:bg-gray-100 transition"
        >
          Explore Services
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full border-2 border-white font-semibold hover:bg-blue-700 transition"
        >
          Join Us
        </a>
      </div>
    </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <img
              src={wgxImage}
              alt="Webgenix Team"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(16,108,194,0.35)] rounded-2xl"></div>
          </div>

        {/* Right - Text */}
<div className="text-center md:text-left">
  <h2 className="text-4xl font-bold text-[rgba(16,108,194,0.815)] mb-6">
    About Webgenix
  </h2>
  <p className="text-lg text-gray-600 leading-relaxed mb-4">
    <span className="font-semibold">Webgenix</span> is a complete digital
    learning and development platform built to empower both students and
    businesses. With a strong focus on innovation, creativity, and technology,
    we provide practical training and professional solutions in multiple IT
    domains.
  </p>

  <p className="text-lg text-gray-600 leading-relaxed mb-4">
    We offer specialized learning in:
  </p>

  <ul className="list-disc list-inside text-lg text-gray-600 leading-relaxed mb-4 space-y-2">
    <li>Web Development (Frontend, Backend, Full-Stack)</li>
    <li>Data Science & AI</li>
    <li>Graphic Designing & Graphic Designing with AI</li>
    <li>UI/UX Designing</li>
    <li>and many other emerging IT fields</li>
  </ul>

  <p className="text-lg text-gray-600 leading-relaxed mb-4">
    Alongside our <span className="font-medium">YouTube lectures</span> and
    <span className="font-medium"> WhatsApp community</span>, we provide
    internships and real-world projects so learners gain industry-level
    exposure.
  </p>

  <p className="text-lg text-gray-600 leading-relaxed mb-4">
    For businesses and clients, our team delivers customized websites, digital
    products, and full-stack development solutions that bring ideas to life.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed font-semibold italic">
    ✨ “Learn, Build, and Grow with Digital Innovation.”
  </p>
</div>

        </div>
      </section>

    {/* Services Badges Section */}
<section id="services" className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center px-6">
    <h3 className="text-3xl font-bold mb-10 text-blue-700">
      What We Offer
    </h3>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {[
        { title: "Custom Project Development", icon: "💻" },
        { title: "Ready-made Solutions", icon: "⚡" },
        { title: "Web App Engineering", icon: "🌐" },
        { title: "Project Consultancy", icon: "📊" },
        { title: "UI/UX Design", icon: "🎨" },
        { title: "MVP Launch Services", icon: "🚀" },
        { title: "Data Science", icon: "🤖" },
        { title: "Graphics with AI", icon: "🧠" },
        { title: "Email Marketing", icon: "📧" },
      ].map((service, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
        >
          <span className="text-3xl mb-3">{service.icon}</span>
          <h4 className="text-blue-700 font-semibold text-lg">
            {service.title}
          </h4>
        </div>
      ))}
    </div>
  </div>
</section>

<Projects />
<Uiprojects />

      {/* Expertise Section */}
     <section id="expertise" className="py-20 bg-gray-100">
  <div className="max-w-7xl mx-auto text-center px-6">
    <h3 className="text-3xl font-bold mb-4 text-blue-700">Our Expertise</h3>
    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      At <span className="font-semibold">Webgenix</span>, we combine innovation, technology, and creativity 
      to deliver both learning and professional solutions across multiple IT domains.
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Web Development",
          desc: "Building responsive, modern, and full-stack websites tailored to client needs.",
        },
        {
          title: "App Development",
          desc: "Cross-platform mobile and web apps designed for performance and scalability.",
        },
        {
          title: "Data Science & AI",
          desc: "Machine learning, analytics, and AI-powered smart solutions.",
        },
        {
          title: "Graphic Designing",
          desc: "Creative branding, posters, and designs that make businesses stand out.",
        },
        {
          title: "Graphic Designing with AI",
          desc: "Next-gen design using AI tools for speed, precision, and creativity.",
        },
        {
          title: "UI & UX Design",
          desc: "User-friendly interfaces, wireframing, and prototyping for better experiences.",
        },
       {
  title: "Video Animation",
  desc: "Engaging 2D/3D animations, motion graphics, and explainer videos.",
},

        {
          title: "Internships & Training",
          desc: "Hands-on programs, YouTube lectures, and community-based learning.",
        },
        {
          title: "Client-Focused Solutions",
          desc: "Custom websites, digital products, and IT solutions for businesses.",
        },
     
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition"
        >
          <h4 className="text-lg font-semibold text-blue-700 mb-2">
            {item.title}
          </h4>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Values Section */}
      <section id="values" className="py-20 bg-blue-50 text-center">
        <h3 className="text-3xl font-bold mb-6 text-blue-700">Our Values</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {["Impact-Driven", "Adaptibility", "Authenticity", "Client-Centric"].map(
            (value, i) => (
              <div
                key={i}
                className="px-6 py-3 bg-white border border-blue-200 rounded-lg shadow hover:shadow-md"
              >
                <p className="font-semibold text-blue-700">{value}</p>
              </div>
            )
          )}
        </div>
      </section>

    {/* Contact Section */}
<section
  id="contact"
  className="py-20 bg-gradient-to-b from-blue-700 to-blue-500 text-white text-center"
>
  <h3 className="text-3xl font-bold mb-6">Let’s Connect With Webgenix</h3>
  <p className="max-w-2xl mx-auto mb-8 text-lg">
    Whether you’re a student looking to learn or a business seeking digital 
    solutions — Webgenix is here to help you <span className="font-semibold">Learn, Build & Grow</span>.
  </p>

  <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
    <div className="bg-white text-blue-700 p-6 rounded-xl shadow w-64 hover:shadow-lg transition">
      <p className="font-semibold text-lg mb-1">📧 Email</p>
      <p className="text-gray-700">info@webgenix.com</p>
    </div>
    <div className="bg-white text-blue-700 p-6 rounded-xl shadow w-64 hover:shadow-lg transition">
      <p className="font-semibold text-lg mb-1">📞 Phone</p>
      <p className="text-gray-700">+92 333 2186309</p>
    </div>
    <div className="bg-white text-blue-700 p-6 rounded-xl shadow w-64 hover:shadow-lg transition">
      <p className="font-semibold text-lg mb-1">💬 WhatsApp</p>
      <p className="text-gray-700">+92 333 2186309</p>
    </div>
  </div>

  <a
    href="#services"
    className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow hover:bg-gray-100 transition"
  >
    Start Your Project
  </a>
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
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Book a Consultation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">SERVICES</h4>
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Data Science</li>
              <li>Brand Strategy</li>
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
