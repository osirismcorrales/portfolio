import type { ProjectData } from '../data/projects';
import { Button } from '../../../components/Button/Button';
import { ScrollReveal } from '../../../components/ScrollReveal/ScrollReveal';
import { useState } from 'react';

const ArrowIcon = () => (
  <svg viewBox="0 0 14 14" fill="none" className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  title: string;
  category: string;
  description: string;
}

export function ProjectCard({ project, index, title, category, description }: ProjectCardProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const isEven = index % 2 !== 0;

  const gallery = project.gallery || (project.imageSrc ? [project.imageSrc] : []);
  const hasGallery = gallery.length > 1;

  return (
    <article className="mb-24 md:mb-32 last:mb-0">
      <ScrollReveal>
        <div
          className={`grid grid-cols-1 ${
            isEven ? 'md:grid-cols-[1fr_1.618fr]' : 'md:grid-cols-[1.618fr_1fr]'
          } gap-10 lg:gap-16 items-center`}
        >
          {/* Showcase Container */}
          <div
            className={`relative overflow-hidden border border-warm-border bg-warm-surface transition-colors duration-500 hover:border-warm-border-light ${
              isEven ? 'md:order-2' : 'md:order-1'
            }`}
          >
            {project.image === 'mobile' ? (
              <MobileShowcase
                gallery={gallery}
                hasGallery={hasGallery}
                activeImageIndex={activeImageIndex}
                setActiveImageIndex={setActiveImageIndex}
                title={title}
              />
            ) : (
              <DesktopShowcase
                gallery={gallery}
                hasGallery={hasGallery}
                activeImageIndex={activeImageIndex}
                setActiveImageIndex={setActiveImageIndex}
                title={title}
              />
            )}
          </div>

          {/* Info */}
          <div className={`py-2 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-heading text-xs text-carbon-subtle tracking-widest">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-xs font-medium tracking-widest uppercase text-carbon-muted">
                {category}
              </span>
            </div>

            <h3 className="font-heading text-3xl sm:text-4xl font-light tracking-tight text-carbon-text leading-tight mb-4">
              {title}
            </h3>

            <p className="text-base text-carbon-secondary leading-relaxed max-w-md">
              {description}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium tracking-wide text-carbon-muted px-3 py-1 border border-warm-border transition-colors duration-200 hover:border-wine hover:text-wine"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-6 mt-8">
              {project.links.live && (
                <Button
                  label="View Project"
                  href={project.links.live}
                  variant="ghost"
                  icon={<ArrowIcon />}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              )}
              {project.links.github && (
                <Button
                  label="GitHub"
                  href={project.links.github}
                  variant="ghost"
                  icon={<ArrowIcon />}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              )}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </article>
  );
}

/* ─── Mobile Showcase (Floating Card) ─── */

interface ShowcaseProps {
  gallery: string[];
  hasGallery: boolean;
  activeImageIndex: number;
  setActiveImageIndex: (i: number) => void;
  title: string;
}

function MobileShowcase({ gallery, hasGallery, activeImageIndex, setActiveImageIndex, title }: ShowcaseProps) {
  return (
    <div className="p-6 sm:p-8 md:p-10 flex flex-col items-center bg-warm-alt/30">
      {/* Floating phone card — no device frame, just the screenshot */}
      <div className="relative w-[220px] sm:w-[250px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
        {/* Fixed aspect ratio container matching real phone screenshots */}
        <div className="relative aspect-[9/19.5] bg-white">
          {gallery.map((img, i) => (
            <img
              key={img}
              src={img}
              alt={`${title} — screenshot ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ease-in-out ${
                i === activeImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation controls — outside the card */}
      {hasGallery && (
        <div className="flex items-center gap-4 mt-5">
          <button
            onClick={() => setActiveImageIndex((activeImageIndex - 1 + gallery.length) % gallery.length)}
            aria-label="Previous screenshot"
            className="p-1.5 text-carbon-muted hover:text-carbon-text transition-colors cursor-pointer"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImageIndex(i)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  i === activeImageIndex
                    ? 'w-5 bg-wine'
                    : 'w-1.5 bg-warm-border hover:bg-carbon-muted'
                }`}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveImageIndex((activeImageIndex + 1) % gallery.length)}
            aria-label="Next screenshot"
            className="p-1.5 text-carbon-muted hover:text-carbon-text transition-colors cursor-pointer"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

/* ─── Desktop Showcase (Clean, no browser frame) ─── */

function DesktopShowcase({ gallery, hasGallery, activeImageIndex, setActiveImageIndex, title }: ShowcaseProps) {
  return (
    <div className="p-4 sm:p-6 flex flex-col items-center bg-warm-alt/30">
      {/* Clean image card — no browser chrome */}
      <div className="relative w-full rounded-lg overflow-hidden shadow-lg ring-1 ring-black/5">
        <div className="relative aspect-[16/10] bg-white">
          {gallery.map((img, i) => (
            <img
              key={img}
              src={img}
              alt={`${title} — screenshot ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ease-in-out ${
                i === activeImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Tab switcher */}
      {hasGallery && (
        <div className="flex items-center justify-center gap-3 mt-4">
          <button
            onClick={() => setActiveImageIndex(0)}
            className={`text-xs font-medium px-3 py-1 border transition-all cursor-pointer ${
              activeImageIndex === 0
                ? 'border-wine text-wine bg-wine/5'
                : 'border-warm-border text-carbon-muted hover:text-carbon-text'
            }`}
          >
            Storefront
          </button>
          <button
            onClick={() => setActiveImageIndex(1)}
            className={`text-xs font-medium px-3 py-1 border transition-all cursor-pointer ${
              activeImageIndex === 1
                ? 'border-wine text-wine bg-wine/5'
                : 'border-warm-border text-carbon-muted hover:text-carbon-text'
            }`}
          >
            Admin Panel
          </button>
        </div>
      )}
    </div>
  );
}

