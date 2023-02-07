"use client";
import { useEffect } from 'react';

/**
 * Error boundary component
 */
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Something was wrong</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
