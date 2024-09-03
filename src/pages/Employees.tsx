import { Avatar, Box, Typography } from "@mui/material";
import Header from "../components/Header";
import Helmet from "../components/Helmet";
import { FlexBox, PageBox } from "../styles/themeStyles";
import { GridColDef } from "@mui/x-data-grid";
import GridTable from "../components/GridTable";
import { employeesRows } from "../data/data";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import { useMemo } from "react";
const employeesColumns: GridColDef[] = [
  {
    field: "employee",
    headerName: "Employee",
    headerAlign: "center",
    minWidth: 110,
    flex: 1,
    renderCell: (params) => {
      return (
        <Box sx={{ width: "100%" }}>
          <FlexBox
            sx={{
              columnGap: "10px",
              paddingLeft: { md: "10px", lg: "16px", xl: "30px" },
            }}
          >
            <Avatar
              alt={`${params.row.name}`}
              src={`${params.row.image}`}
              sx={{ width: "43px", height: "43px" }}
            />
            <Typography variant="body1" sx={{ fontSize: "0.81rem" }}>
              {params.row.name}
            </Typography>
          </FlexBox>
        </Box>
      );
    },
  },
  {
    field: "designation",
    headerName: "Designation",
    headerAlign: "center",
    minWidth: 80,
    flex: 0.8,
  },
  {
    field: "country",
    headerName: "Country",
    headerAlign: "center",
    minWidth: 80,
    flex: 0.8,

    renderCell: (params) => {
      return (
        <FlexBox sx={{ columnGap: "6px" }}>
          <PinDropOutlinedIcon sx={{ fontSize: "0.89rem" }} />
          <Typography variant="body1" sx={{ fontSize: "0.81rem" }}>
            {params.row.country}
          </Typography>
        </FlexBox>
      );
    },
  },
  {
    field: "hireDate",
    headerName: "HireDate",
    headerAlign: "center",
    minWidth: 80,
    flex: 0.8,
    type: "date",
    valueGetter: (params) => new Date(params.row.hireDate),
  },
  {
    field: "reportsTo",
    headerName: "ReportsTo",
    headerAlign: "center",
    minWidth: 80,
    flex: 0.8,
  },
  {
    field: "id",
    headerName: "Employee ID",
    headerAlign: "center",
    minWidth: 70,
    flex: 0.7,
  },
];
const Employees = () => {
  const columns = useMemo(
    () =>
      employeesColumns.map((col) =>
        col.field === "employee" || col.field === "country"
          ? { ...col, sortable: false }
          : col
      ),
    []
  );
  return (
    <Helmet title="Employees">
      <PageBox>
        <Header title="Employees" category="Page" />
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
              rows={employeesRows}
              height={60}
              checked={false}
              searchable={true}
            />
          </Box>
        </FlexBox>
      </PageBox>
    </Helmet>
  );
};

export default Employees;
