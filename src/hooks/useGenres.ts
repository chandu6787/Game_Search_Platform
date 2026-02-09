import { useEffect } from "react";
import { useState } from "react";
import apiClient from "../services/api-client";
interface Genre {
  id: number;
  name: string;
}
interface FetchGenresResponse {
  count: number;
  results: Genre[];
}
const useGenres=() => {
     const [genres, setGenres] = useState<Genre[]>([]);
          const [error, setError] = useState("");
          const [loading, setLoading] = useState(true)
          useEffect(() => {
            const controller = new AbortController();
            apiClient
              .get<FetchGenresResponse>("/genres",{signal:controller.signal})
              .then((response) => {setGenres(response.data.results)
              setLoading(false);
          })
              .catch((error) => {
                if (error.name === "CanceledError") return;
                setError(error.message);
                setLoading(false);
              });
                return () => controller.abort();
          },[]);
    
          return { genres, error, loading };
}
export default useGenres;


