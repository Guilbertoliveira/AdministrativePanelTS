import styled from "@emotion/styled";
import { tableCellClasses, tableRowClasses } from "@mui/material";
import TableCell from "@mui/material/TableCell/TableCell";
import TableRow from "@mui/material/TableRow/TableRow";

export const CellStyledMui = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        color: "var(--dark-blue)",
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "var(--font-main)",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        fontFamily: "var(--font-main)"
    }
}))

export const RowStyledMui = styled(TableRow)(() => ({
    [`&:nth-of-type(odd)`]: {
        backgroundColor: "var(--light-gray)",
        align: "end"
    }
}))