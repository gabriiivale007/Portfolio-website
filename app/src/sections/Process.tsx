import { useEffect, useRef, useState } from 'react';

interface ProcessStep {
  word: string;
  description: string;
  image: string;
}

const processSteps: ProcessStep[] = [
  {
    word: 'ROBOTICA',
    description: "Ho partecipato a competizioni internazionali di robotica (RoboCup Junior Rescue Maze), raggiungendo il 3° posto agli Europei 2025. Ho progettato robot autonomi con fusione sensoriale, controlli PID e path-planning ottimizzato, sviluppando competenze in Python, MicroPython e Raspberry Pi.",
    image: './images/robotica.jpg',
  },
  {
    word: 'SCUOLA E LAVORO',
    description: "Diplomato con 100/100 in Informatica presso IIS 'E. Fermi R. Guttuso' di Giarre. Attualmente in stage presso Software Engineering Italia S.r.l., dove applico le mie competenze in contesti professionali reali, lavorando su progetti concreti e metodologie di sviluppo software.",
    image: './images/robotica.jpg',
  },
  {
    word: 'PROFILO GITHUB',
    description: "Esplora i miei progetti su github.com/gabriiivale007. Repository con progetti di robotica, sviluppo software e sperimentazioni personali. Ogni progetto rappresenta un'occasione di apprendimento continuo con attenzione alla qualità del codice e documentazione dettagliata.",
    image: './images/robotica.jpg',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

  // Auto-cycle through steps
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % processSteps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="bg-site-gray py-20 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        <div
          className={`bg-black rounded-3xl overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Words & Description */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between min-h-[400px] lg:min-h-[500px]">
              {/* Words */}
              <div className="space-y-2">
                {processSteps.map((step, index) => (
                  <button
                    key={step.word}
                    onClick={() => setActiveIndex(index)}
                    className={`block font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight transition-all duration-500 ${activeIndex === index ? 'text-white' : 'text-white/30 hover:text-white/60'
                      }`}
                    style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                  >
                    {step.word}
                  </button>
                ))}
              </div>

              {/* Description */}
              <div className="mt-8 lg:mt-12">
                <p
                  key={activeIndex}
                  className="text-sm sm:text-base text-white/70 leading-relaxed animate-fade-in-up"
                >
                  {processSteps[activeIndex].description}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative h-[300px] sm:h-[400px] lg:h-auto overflow-hidden">
              {processSteps.map((step, index) => (
                <img
                  key={step.word}
                  src={step.image}
                  alt={step.word}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
