import useSWR from "swr";
import fetcher from "./fetcher";

export default function useEntry(id) {
  const { data, error } = useSWR("/api/get-entry?id=" + id, fetcher);

  if (error) return { isLoading: true };

  return {
    entry: data,
    isLoading: !error && !data,
    isError: error,
  };
}
