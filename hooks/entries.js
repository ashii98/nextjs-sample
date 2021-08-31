import useSWR from "swr";
import fetcher from "./fetcher";

export default function useEntries() {
  const { data, error } = useSWR("/api/get-entries", fetcher);

  return {
    entries: data,
    isLoading: !error && !data,
    isError: error,
  };
}
