import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
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

  const socialLinks = [
    { name: 'Mail', href: "mailto:gabrielevalente2007@gmail.com" },
    { name: 'Instagram', href: 'https://www.instagram.com/gabrielevalente._/' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/gabriele-valente2007/' },
  ];

  return (
    <footer
      id="footer"
      ref={sectionRef}
      className="bg-site-gray py-20 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* CTA Section */}
        <div
          className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 pb-12 border-b border-black/20 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{ transitionDelay: '0.2s', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          {/* Left - CTA Text */}
          <div className="flex items-center gap-4">
            <ArrowUpRight className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-black" strokeWidth={1.5} />
            <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
              LAVORIAMO ASSIEME<br />CONTATTAMI
            </h3>
          </div>

          {/* Right - Button */}
          <a
            href="https://www.instagram.com/gabrielevalente._/"
            className="px-8 py-4 border border-black rounded-full text-sm font-medium uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-300 self-start sm:self-auto inline-block"
          >
            Contatti
          </a>
        </div>

        {/* Large Name */}
        <div
          className={`py-12 lg:py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          style={{ transitionDelay: '0.4s', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <h2 className="font-display text-[80px] sm:text-[120px] lg:text-[160px] xl:text-[200px] tracking-tighter text-center leading-none">
            GABRIELE VALENTE
          </h2>
        </div>

        {/* Bottom Bar */}
        <div
          className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-8 border-t border-black/20 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ transitionDelay: '0.6s' }}
        >

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium uppercase tracking-wider text-black/60 hover:text-black hover-underline transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
