import { useState, useEffect, useCallback } from "react";

export const useFetch = <T,>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [abortController, setAbortController] = useState<AbortController | null>(null);

  // Cache the function with useCallback
  const fetchData = useCallback(async () => {
    if (!abortController) {
      return;
    }

    try {
      setIsLoading(true);
      const res = await fetch(url, { signal: abortController.signal });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();

      setData(data);
      setError(null);
    } catch (err) {
      if (typeof err === "string") {
        throw new Error(err);
      } else {
        setError("Could not fetch the data");
      }
    } finally {
      setIsLoading(false);
      setAbortController(null);
    }
  }, [abortController, url]);

  useEffect(() => {
    const controller: AbortController = new AbortController();
    setAbortController(controller);
  }, []);

  useEffect(() => {
    if (!abortController) {
      return;
    }

    fetchData();

    return () => {
      if (abortController) {
        abortController.abort();
      }
    };
  }, [abortController, fetchData]);

  return { data, isLoading, error };
};
