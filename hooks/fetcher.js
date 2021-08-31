export default function fetcher(url) {
  return window.fetch(url).then((res) => res.json());
}
