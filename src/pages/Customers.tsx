import { GridColDef } from "@mui/x-data-grid";
import Header from "../components/Header";
import Helmet from "../components/Helmet";
import { FlexBox, PageBox } from "../styles/themeStyles";
import { customersRows } from "../data/data";
import { useMemo } from "react";
import GridTable from "../components/GridTable";
import { Avatar, Box, Typography } from "@mui/material";
const customersColumns: GridColDef[] = [
  {
    field: "name",
    headerName: "Name",
    headerAlign: "center",
    minWidth: 120,
    flex: 1,
    renderCell: (params) => {
      return (
        <FlexBox
          sx={{
            columnGap: "10px",
            width: "100%",
            paddingLeft: { lg: "10px", xl: "25px" },
          }}
        >
          <Avatar
            alt={params.row.name}
            src={params.row.image}
            sx={{ width: "41px", height: "41px" }}
          />
          <FlexBox sx={{ flexDirection: "column" }}>
            <Typography variant="body1" sx={{ fontSize: "0.81rem" }}>
              {params.row.name}
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "0.8rem" }}>
              {params.row.email}
            </Typography>
          </FlexBox>
        </FlexBox>
      );
    },
  },
  {
    field: "projectName",
    headerName: "Project Name",
    headerAlign: "center",
    minWidth: 90,
    flex: 0.8,
  },
  {
    field: "status",
    headerName: "Status",
    headerAlign: "center",
    minWidth: 80,
    flex: 0.7,
    renderCell: (params) => {
      return (
        <FlexBox sx={{ columnGap: "10px" }}>
          <Box
            sx={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: params.row.statusBg,
            }}
          ></Box>
          <Typography variant="body1" sx={{ fontSize: "0.81rem" }}>
            {params.row.status}
          </Typography>
        </FlexBox>
      );
    },
  },
  {
    field: "weeks",
    headerName: "Weeks",
    headerAlign: "center",
    minWidth: 70,
    flex: 0.5,
  },
  {
    field: "budget",
    headerName: "Budget",
    headerAlign: "center",
    minWidth: 70,
    flex: 0.5,
  },
  {
    field: "location",
    headerName: "Location",
    headerAlign: "center",
    minWidth: 80,
    flex: 0.6,
  },
  {
    field: "id",
    headerName: "Customer ID",
    headerAlign: "center",
    minWidth: 80,
    flex: 0.6,
  },
];
const Customers = () => {
  const columns = useMemo(
    () =>
      customersColumns.map((col) =>
        col.field === "name" ? { ...col, sortable: false } : col
      ),
    []
  );
  return (
    <Helmet title="Customers">
      <PageBox>
        <Header title="Customers" category="Page" />
        <FlexBox sx={{ justifyContent: "center" }}>
          <Box
            sx={{
              width: {
                xs: "270px",
                xsm: "380px",
                sm: "95%",
                lg: "92%",
              },
            }}
          >
            <GridTable
              columns={columns}
              rows={customersRows}
              height={60}
              checked={true}
              searchable={false}
            />
          </Box>
        </FlexBox>
      </PageBox>
    </Helmet>
  );
};

export default Customers;
