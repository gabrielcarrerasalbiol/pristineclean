"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h2 className="font-display text-3xl font-bold text-sport-dark sm:text-4xl">
        Something went wrong
      </h2>
      <p className="mt-4 max-w-md text-gray-600">
        We encountered an unexpected error. Please try again.
      </p>
      <button onClick={reset} className="btn-primary mt-8">
        Try Again
      </button>
    </div>
  );
}
