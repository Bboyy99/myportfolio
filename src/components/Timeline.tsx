export default function Timeline() {
  return (
    <div className="relative border-l border-gray-300 dark:border-gray-700 ml-3">
      <div className="mb-10 ml-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-600 rounded-full -left-3">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </span>
        <h3 className="font-semibold">Graduated from La Cité</h3>
        <time className="block mb-2 text-sm text-gray-500 dark:text-gray-400">2023</time>
        <p className="text-gray-600 dark:text-gray-300">
          Completed Computer Programming diploma
        </p>
      </div>
      {/* Add more timeline items */}
    </div>
  );
} 