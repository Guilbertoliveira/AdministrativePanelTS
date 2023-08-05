import IProfessional from "./types/IProfessional";
import useFetch from "./useFetch";

export default function useProfessional() {
    return useFetch<IProfessional[]>({ url: 'professionals' })
}