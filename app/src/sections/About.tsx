import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function About() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen bg-black text-white py-20 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section Number */}
        <div
          className={`absolute top-8 right-4 sm:right-8 lg:right-16 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <span className="text-sm font-medium text-white/40">02/05</span>
        </div>

        {/* Main Title */}
        <div className="pt-16 lg:pt-24">
          <h2
            className={`font-display text-[100px] sm:text-[130px] lg:text-[160px] xl:text-[180px] leading-none tracking-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            style={{ transitionDelay: '0.3s', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <span className="text-white/40">/</span>ABOUT
          </h2>
        </div>

        {/* Content Grid */}
        <div className="mt-12 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left - Arrow Icon */}
          <div
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '0.5s', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <ArrowUpRight className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-white/20 hover:text-white/40 hover:rotate-12 transition-all duration-300 cursor-pointer" strokeWidth={1} />
          </div>

          {/* Right - Description */}
          <div
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '0.7s', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-white/90">
              Ciao! Sono uno studente di informatica all'Università di Catania e lavoro come sviluppatore presso Swing-it. La robotica è la mia grande passione: ho conquistato un primo posto alle regionali e diversi podi a livello nazionale ed europeo. Python è il mio linguaggio del cuore, ma nel tempo ho imparato anche C, C++, HTML, CSS e JavaScript. Attualmente mi sto specializzando in Flutter, React e intelligenza artificiale. Amo condividere ciò che imparo e aiutare altri a scoprire il mondo della programmazione e della robotica.            </p>
          </div>
        </div>

        {/* Bottom Caption */}
        <div
          className={`mt-16 lg:mt-24 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ transitionDelay: '0.9s' }}
        >
          <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-white/50">
            Sviluppatore presso Swing-it | Disponibile per lezioni private – ti aiuto a trasformare i dubbi in punti di forza
          </p>
        </div>
      </div>
    </section>
  );
}
