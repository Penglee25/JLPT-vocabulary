import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());
export default function level5 = () => {
	const { data, error, mutate } = useSWR(
		"/api/words?level=5&offset=20&limit=5",
		fetcher
	);

	const result =
		!data && !error ? "" : error ? JSON.stringify(error) : data.words;

	return result;
};
