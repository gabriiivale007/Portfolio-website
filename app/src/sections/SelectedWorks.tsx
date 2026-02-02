import { useEffect, useRef, useState } from 'react';

interface Project {
  name: string;
  category: string;
  image?: string;
}

const projects: Project[] = [
  { name: 'Lezioni private', category: ''},
  { name: 'Full-Stack developer', category: 'Development' },
  { name: 'AI agent nuilder', category: 'AI & Development' },
];

export default function SelectedWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="works"
      ref={sectionRef}
      className="bg-site-gray py-20 lg:py-32"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section Label */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.1s' }}
        >
          <span className="text-xs font-medium uppercase tracking-widest text-black/60">
            Altro di me
          </span>
        </div>

        {/* Projects List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={`group border-t border-dashed border-black/30 py-8 lg:py-10 cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${0.2 + index * 0.1}s`, transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center justify-between">
                {/* Project Name */}
                <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight group-hover:translate-x-4 transition-transform duration-500">
                  {project.name}
                </h3>

                {/* Category */}
                <span className="text-sm sm:text-base font-medium text-black/60 group-hover:text-black transition-colors duration-300">
                  {project.category}
                </span>
              </div>
            </div>
          ))}

          {/* Last border */}
          <div className="border-t border-dashed border-black/30" />
        </div>

        {/* View All Link */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          <button className="text-base font-medium text-black/80 hover:text-black hover-underline transition-colors duration-300">
            Guarda altro su di me, scorri
          </button>
        </div>
      </div>

      {/* Hover Image Preview */}
      {hoveredIndex !== null && projects[hoveredIndex]?.image && (
        <div
          className="fixed pointer-events-none z-50 w-80 h-52 rounded-lg overflow-hidden shadow-2xl transition-opacity duration-300"
          style={{
            left: mousePos.x + 20,
            top: mousePos.y - 100,
            opacity: hoveredIndex !== null ? 1 : 0,
            transform: 'translate(0, 0)',
          }}
        >
          <img
            src={projects[hoveredIndex].image}
            alt={projects[hoveredIndex].name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </section>
  );
}
