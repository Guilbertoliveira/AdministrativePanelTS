import IQuery from "./types/IQuery";
import useFetch from "./useFetch";

export default function useQueryData() {
    return useFetch<IQuery[]>({ url: 'querys' });
}