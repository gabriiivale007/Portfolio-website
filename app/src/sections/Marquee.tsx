import { Sparkles } from 'lucide-react';

export default function Marquee() {
  const items = [
    'AI',
    'PYTHON',
    'FRAMEWORK',
    'LEZIONI PRIVATE',
  ];

  return (
    <section className="bg-black py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="font-display text-2xl sm:text-3xl lg:text-4xl text-white tracking-wide mx-4">
              {item}
            </span>
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white mx-4" />
          </div>
        ))}
      </div>
    </section>
  );
}
