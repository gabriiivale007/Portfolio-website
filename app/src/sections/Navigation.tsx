import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-8 shadow-lg">

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          <button
            onClick={() => scrollToSection('about')}
            className="px-4 py-2 text-xs font-medium uppercase tracking-wider hover:opacity-60 transition-opacity"
          >
            About
          </button>
          <span className="text-site-light-gray">/</span>
          <button
            onClick={() => scrollToSection('works')}
            className="px-4 py-2 text-xs font-medium uppercase tracking-wider hover:opacity-60 transition-opacity"
          >
            Work
          </button>
          <span className="text-site-light-gray">/</span>
          <button
            onClick={() => scrollToSection('footer')}
            className="px-4 py-2 text-xs font-medium uppercase tracking-wider hover:opacity-60 transition-opacity"
          >
            Contact
          </button>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection('footer')}
          className="px-5 py-2 border border-black rounded-full text-xs font-medium uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300"
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
}
