import IProfessional from "../../types/IProfessional"
import IQuery from "../../types/IQuery"

interface IData {
    name: string,
    query: number
}

interface Props {
    professionals: IProfessional[] | null,
    query: IQuery[] | null
}
export default function useDataGraphic({ professionals, query }: Props) {
    let data: Array<IData> = [];

    if (professionals && query) {
        data = professionals.map((professional) => ({
            name: professional.name,
            query: query.filter((query) => {
                return query.professional.some((prof) => prof.name === professional.name)
            }).length
        }))
    }

    return data;
}