import { useState, useEffect } from "react";

interface UseFetchState<T> {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
}

export function useFetch<T>(url: string) {
  const [state, setState] = useState<UseFetchState<T>>({
    data: null,
    isLoading: true,
    isError: false,
    error: null,
    refetch: () => {},
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error fetching data from ${url}`);
        }
        const json = await response.json();
        setState({
          data: json,
          isLoading: false,
          isError: false,
          error: null,
          refetch: () => fetchData(),
        });
      } catch (error) {
        setState({
          data: null,
          isLoading: false,
          isError: true,
          error: error as Error,
          refetch: () => fetchData(),
        });
      }
    };

    fetchData();
  }, [url]);

  return state;
}
