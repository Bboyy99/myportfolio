export default function Education({
  school,
  program,
  duration,
  location,
  highlights
}: {
  school: string;
  program: string;
  duration: string;
  location: string;
  highlights: string[];
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-2">{school}</h3>
      <p className="text-indigo-600 dark:text-indigo-400 mb-2">{program}</p>
      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-4">
        <span>{duration}</span>
        <span>{location}</span>
      </div>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
        {highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    </div>
  );
} 