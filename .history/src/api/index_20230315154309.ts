import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

const getWordsByLevel = (level: number) => {
	const { data, error, mutate } = useSWR(
		`/api/words?level=${level}&offset=20&limit=5`,
		fetcher
	);

	if (error) {
		console.error(error);
		return "";
	}

	return data?.words || "";
};


export const level5 = () => getWordsByLevel(5);

export const level4 = () => getWordsByLevel(4);

export { level5, level4 };
