import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import IProfessional from "../../types/IProfessional";
import IQuery from "../../types/IQuery";
import useDataGraphic from "./useDataGraphic";
import { SectionStyled } from './styles'
import Title from "../Title";

interface Props {
    professionals: IProfessional[] | null,
    query: IQuery[] | null
}

interface IData {
    name: string,
    query: number,
}



const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`Profissional: ${label}`}</p>
                <p className="desc">{`Consultas feitas: ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};

export default function Graphic({ professionals, query }: Props) {
    let data: Array<IData> = useDataGraphic({ professionals, query });
    return (
        <>
            <Title image="grafico">Consultas mensais por especialista</Title>
            <SectionStyled>
                <ResponsiveContainer width="100%" height={350}>
                    <BarChart layout="vertical" data={data} margin={{ top: 25, right: 40, bottom: 10, left: 40 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" ></XAxis>
                        <Tooltip content={<CustomTooltip />} />
                        <YAxis type="category" dataKey="name"></YAxis>
                        <Bar dataKey='query' fill="#083860" barSize={30}></Bar>
                    </BarChart>
                </ResponsiveContainer>
            </SectionStyled>
        </>
    )
}