import { useState, useEffect } from "react";

interface UseFetchState<T> {
  data: T | null;
  isLoading: boolean;
  isError: Error | null;
}

export function useFetch<T>(url: string) {
  const [state, setState] = useState<UseFetchState<T>>({
    data: null,
    isLoading: true,
    isError: null,
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
          isError: null,
        });
      } catch (error) {
        setState({
          data: null,
          isLoading: false,
          isError:
            error instanceof Error ? error : new Error("An error occurred"),
        });
      }
    };

    fetchData();
  }, [url]);

  return state;
}
