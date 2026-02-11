import { useEffect } from "react";
import { useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";
interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[],
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true); // Reset loading state on dependency change
    const controller = new AbortController();
    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error.name === "CanceledError") return;
        setError(error.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, [...(deps || [])]);

  return { data, error, loading };
};
export default useData;
