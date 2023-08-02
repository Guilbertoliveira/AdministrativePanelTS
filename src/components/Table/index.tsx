import { TableContainer } from "@mui/material";
import Paper from "@mui/material/Paper/Paper";
import Table from "@mui/material/Table/Table";
import TableHead from "@mui/material/TableHead/TableHead";
import TableRow from "@mui/material/TableRow/TableRow";
import TableCell from "@mui/material/TableCell/TableCell";
import { titles } from "./datas";
import TableBody from '@mui/material/TableBody';
import IQuery from "../../types/IQuery";

export default function TableMui({ data }: { data: IQuery[] | null }) {

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} arial-label="simple table">
                    <TableHead>
                        <TableRow>

                            {titles.map((title, index) => {
                                return (
                                    <TableCell key={index}>{title}</TableCell>)
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((dataColumn) => {
                            return (
                                <TableRow>
                                    <TableCell component="th" scope="row">{dataColumn.date}</TableCell>
                                    <TableCell component="th" scope="row">{dataColumn.time}</TableCell>
                                    <TableCell component="th" scope="row">{dataColumn.professional[0].name}</TableCell>
                                    <TableCell component="th" scope="row">{dataColumn.patient}</TableCell>
                                    <TableCell component="th" scope="row">{dataColumn.modality}</TableCell>
                                    <TableCell component="th" scope="row">{dataColumn.modality}</TableCell>
                                </TableRow>

                            )
                        })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}