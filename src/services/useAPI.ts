import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://random-data-api.com";

export interface IPicture {
  copyright: string;
  date: string;
  explanation: string;
  title: string;
  url: string;
}

interface IParams {
  size: string;
}

export interface IResponse {
  response: IPicture | null;
  error: unknown;
  loading: boolean;
}

type IAxios = [IResponse, (params?: IParams) => Promise<void>];

const useAPI = (): IAxios => {
  const [response, setResponse] = useState<IPicture | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (params?: IParams) => {
    setLoading(true);
    try {
      const res = await axios.get("/api/users/random_user", {
        params: {
          size: 4,
          ...params,
        },
      });
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [{ response, error, loading }, fetchData];
};

export default useAPI;
