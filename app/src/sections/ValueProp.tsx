import { useEffect, useRef, useState } from 'react';

export default function ValueProp() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('footer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="bg-site-gray py-20 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* Text Content */}
          <div
            className={`max-w-3xl transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] leading-snug font-medium text-black">
              Porto valore concreto ad ogni progetto, trasformando sfide tecniche in soluzioni innovative e accompagnando studenti e professionisti nel loro percorso di crescita nel mondo della programmazione.
            </p>
          </div>

          {/* CTA Circle */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.4s', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <button
              onClick={scrollToContact}
              className="w-36 h-36 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full border-2 border-black/30 flex items-center justify-center group hover:bg-black hover:border-black transition-all duration-500"
            >
              <span className="text-center text-sm sm:text-base font-medium uppercase tracking-wider group-hover:text-white transition-colors duration-500">
                Get In<br />Touch
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
