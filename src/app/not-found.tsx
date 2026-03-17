import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Page not found
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
