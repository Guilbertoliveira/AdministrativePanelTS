import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import IProfessional from "../../types/IProfessional";
import IQuery from "../../types/IQuery";

interface Props {
    professional: IProfessional[] | null,
    query: IQuery[] | null
}

export default function Graphic({ query, professional }: Props) {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart layout="vertical" margin={{ top: 25, right: 40, bottom: 20 }}>
                <XAxis type="number"></XAxis>
                <YAxis type="category" dataKey="name"></YAxis>
                <Bar dataKey='consultas' fill="#083860" barSize={30}></Bar>
            </BarChart>
        </ResponsiveContainer>
    )
}