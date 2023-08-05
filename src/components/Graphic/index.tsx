import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import IProfessional from "../../types/IProfessional";
import IQuery from "../../types/IQuery";
import useDataGraphic from "./useDataGraphic";

interface Props {
    professionals: IProfessional[] | null,
    query: IQuery[] | null
}

interface IData {
    name: string,
    query: number
}

export default function Graphic({ professionals, query }: Props) {
    let data: Array<IData> = useDataGraphic({ professionals, query });
    console.log(data)
    return (
        <>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart layout="vertical" data={data} margin={{ top: 25, right: 40, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" ></XAxis>
                    <Tooltip />
                    <YAxis type="category" dataKey="name"></YAxis>
                    <Bar dataKey='query' fill="#083860" barSize={30}></Bar>
                </BarChart>
            </ResponsiveContainer>
        </>
    )
}