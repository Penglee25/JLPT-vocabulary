import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const level5 = () => {
	const { data, error, mutate } = useSWR(
		"/api/words?level=5&offset=20&limit=5",
		fetcher
	);

	const result =
		!data && !error ? "" : error ? JSON.stringify(error) : data.words;

	return result;
};

const level4 = () => {
	const { data, error, mutate } = useSWR(
		"/api/words?level=4&offset=20&limit=5",
		fetcher
	);

	const result =
		!data && !error ? "" : error ? JSON.stringify(error) : data.words;

	return result;
};

export {
    level5
}