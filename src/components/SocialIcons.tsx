import { siteConfig } from '@/lib/siteConfig';
import { Github, Linkedin } from 'lucide-react';

export function SocialIcons({ className = '' }: { className?: string }) {
  const { social } = siteConfig;
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={`https://www.linkedin.com/in/${social.linkedin}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-current opacity-70 hover:opacity-100 transition-opacity"
        aria-label="LinkedIn"
      >
        <Linkedin size={20} />
      </a>
      <a
        href={`https://github.com/${social.github}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-current opacity-70 hover:opacity-100 transition-opacity"
        aria-label="GitHub"
      >
        <Github size={20} />
      </a>
      <a
        href={`https://scholar.google.com/citations?user=${social.scholar}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-current opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Google Scholar"
      >
        <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
          <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
        </svg>
      </a>
      <a
        href={`https://orcid.org/${social.orcid}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-current opacity-70 hover:opacity-100 transition-opacity"
        aria-label="ORCID"
      >
        <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor">
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-3.919-3.722z" />
        </svg>
      </a>
    </div>
  );
}
