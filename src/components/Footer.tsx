import { siteConfig } from '@/lib/siteConfig';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="max-w-content mx-auto px-4 sm:px-6 py-6">
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          &copy; {new Date().getFullYear()} {siteConfig.title}
        </p>
      </div>
    </footer>
  );
}
