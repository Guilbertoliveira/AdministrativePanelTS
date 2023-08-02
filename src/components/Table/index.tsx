import { TableContainer } from "@mui/material";
import Paper from "@mui/material/Paper/Paper";
import Table from "@mui/material/Table/Table";
import TableHead from "@mui/material/TableHead/TableHead";
import TableRow from "@mui/material/TableRow/TableRow";
import TableCell from "@mui/material/TableCell/TableCell";
import { titles } from "./datas";
import TableBody from '@mui/material/TableBody';
import IQuery from "../../types/IQuery";
import { CellStyledMui, RowStyledMui } from './styles';


export default function TableMui({ data }: { data: IQuery[] | null }) {

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} arial-label="simple table">
                    <TableHead>
                        <TableRow>

                            {titles.map((title, index) => {
                                return (
                                    <CellStyledMui key={index}>{title}</CellStyledMui>)
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((dataColumn) => {
                            return (
                                <RowStyledMui>
                                    <CellStyledMui component="th" scope="row">{new Date(dataColumn.date).toLocaleDateString()}</CellStyledMui>
                                    <CellStyledMui component="th" scope="row">{dataColumn.time}</CellStyledMui>
                                    <CellStyledMui component="th" scope="row">{dataColumn.professional[0].name}</CellStyledMui>
                                    <CellStyledMui component="th" scope="row">{dataColumn.patient}</CellStyledMui>
                                    <CellStyledMui component="th" scope="row">{dataColumn.modality}</CellStyledMui>
                                    <CellStyledMui component="th" scope="row">{dataColumn.modality}</CellStyledMui>
                                </RowStyledMui>
                            )
                        })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}