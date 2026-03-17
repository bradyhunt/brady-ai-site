'use client';

import { Share2, Github, Linkedin } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

const socialLinks = [
  {
    href: `https://www.linkedin.com/in/${siteConfig.social.linkedin}`,
    label: 'LinkedIn',
    icon: <Linkedin size={16} />,
  },
  {
    href: `https://github.com/${siteConfig.social.github}`,
    label: 'GitHub',
    icon: <Github size={16} />,
  },
  {
    href: `https://scholar.google.com/citations?user=${siteConfig.social.scholar}`,
    label: 'Scholar',
    icon: (
      <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor">
        <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
      </svg>
    ),
  },
  {
    href: `https://orcid.org/${siteConfig.social.orcid}`,
    label: 'ORCID',
    icon: (
      <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-3.919-3.722z" />
      </svg>
    ),
  },
];

export function NavSocialFan() {
  return (
    <div className="group relative">
      <button
        className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
        aria-label="Social links"
      >
        <Share2 size={18} />
      </button>
      <div className="absolute right-0 top-full pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 transition-opacity duration-200">
        <div className="flex flex-col items-center gap-0.5 pt-0">
          {socialLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="p-2 rounded-full bg-primary text-white hover:bg-primary-light shadow-md transition-all duration-300 transform translate-y-[-8px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
