import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Intro animation sequence
    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 1500);

    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Intro Screen */}
      <div
        className={`fixed inset-0 bg-black z-[60] flex items-center justify-center transition-opacity duration-700 ${
          showIntro ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-site-gray overflow-hidden flex items-center justify-center">
        {/* Decorative curved lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M-100 200 Q 400 100, 800 400 T 1600 300"
            stroke="#1089a1"
            strokeWidth="1"
            fill="none"
            className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '2.5s' }}
          />
          <path
            d="M-100 600 Q 500 500, 900 700 T 1600 600"
            stroke="#1089a1"
            strokeWidth="1"
            fill="none"
            className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '2.7s' }}
          />
          <circle
            cx="400"
            cy="200"
            r="4"
            fill="#0743759a1"
            className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '2.9s' }}
          />
          <circle
            cx="900"
            cy="700"
            r="4"
            fill="#0743759a1"
            className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '3.1s' }}
          />
        </svg>

        {/* Content Container */}
        <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
          {/* Label - Top Left */}
          <div
            className={`absolute top-8 left-4 sm:left-8 lg:left-16 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '2.2s', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <p className="text-sm font-medium text-black/80">Freelance</p>
            <p className="text-sm font-medium text-black/80">Designer & Developer</p>
          </div>

          {/* Scrolling Name Background */}
          <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
            <div
              className={`flex whitespace-nowrap animate-name-scroll transition-opacity duration-700 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '2s' }}
            >
              <span className="font-display text-[120px] sm:text-[160px] lg:text-[200px] xl:text-[220px] tracking-tight text-black select-none mx-4">
                | Gabriele Valente |
              </span>
              <span className="font-display text-[120px] sm:text-[160px] lg:text-[200px] xl:text-[220px] tracking-tight text-black select-none mx-4">
                | Developer |
              </span>
              <span className="font-display text-[120px] sm:text-[160px] lg:text-[200px] xl:text-[220px] tracking-tight text-black select-none mx-4">
                | Studente |
              </span>
            </div>
          </div>

          {/* Portrait Image */}
          <div
            className={`relative z-10 flex justify-center transition-all duration-1000 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '2.2s', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <img
              className="h-[50vh] sm:h-[60vh] lg:h-[70vh] w-auto object-contain"
            />
          </div>

          {/* Scroll Down Indicator - Bottom Right */}
          <div
            className={`absolute bottom-8 right-4 sm:right-8 lg:right-16 flex flex-col items-center gap-2 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '3s', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <button
              onClick={scrollToAbout}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <span className="text-sm font-medium text-black/80">Scroll down</span>
              <ArrowDown className="w-5 h-5 text-black/80 animate-bounce-subtle group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
