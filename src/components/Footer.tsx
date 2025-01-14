export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Brandon Chagnon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 