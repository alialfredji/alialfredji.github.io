export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-4rem)] from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-6">
      <div className="text-center animate-fadeIn">
        <h1 className="text-9xl font-bold text-gray-800 dark:text-gray-100">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-indigo-600 dark:bg-indigo-500 rounded-lg 
            hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-300 ease-in-out
            hover:shadow-lg"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}