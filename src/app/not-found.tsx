export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display text-6xl font-bold text-sport-dark sm:text-8xl">
        404
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Page not found. The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <a href="/" className="btn-primary mt-8">
        Back to Home
      </a>
    </div>
  );
}
