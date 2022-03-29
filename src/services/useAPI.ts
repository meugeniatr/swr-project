import axios from "axios";
import useSWR from "swr";

axios.defaults.baseURL = "https://random-data-api.com";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function useUser(size: number) {
  const { data, error } = useSWR(
    `/api/users/random_user?size=${size}`,
    fetcher
  );

  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export { useUser };
