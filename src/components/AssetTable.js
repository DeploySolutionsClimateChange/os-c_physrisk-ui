import { Fragment, React } from "react"
import Box from "@mui/material/Box"
import Link from "@mui/material/Link"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"

function preventDefault(event) {
    event.preventDefault()
}

export default function AssetTable(props) {
    const { data, classes } = props

    const columns = [
        {
            field: "asset_class",
            headerName: "Asset class",
            width: 170,
        },
        {
            field: "type",
            headerName: "Type",
            width: 150,
            description: "Hierarchical specification of asset type.",
        },
        {
            field: "latitude",
            headerName: "Latitude",
            type: "number",
            width: 110,
            editable: true,
        },
        {
            field: "longitude",
            headerName: "Longitude",
            type: "number",
            width: 110,
        },
    ]

    const rows = (data && data.items) ? data.items.map((row, i) => {
        return { ...row, id: i }
    }) : []

    return (
        <Fragment>
            <Box sx={{ height: 400, width: "100%" }} classes={classes}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={100}
                    density="compact"
                    rowsPerPageOptions={[100]}
                    checkboxSelection
                    disableSelectionOnClick
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
            <Link
                color="primary"
                href="#"
                onClick={preventDefault}
                sx={{ mt: 3 }}
            >
                See more details
            </Link>
        </Fragment>
    )
}
