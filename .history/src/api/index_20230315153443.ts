import { level5 } from "./level5";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export {
    level5
}