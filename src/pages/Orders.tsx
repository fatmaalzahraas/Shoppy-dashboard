import { useMemo } from "react";
import GridTable from "../components/GridTable";
import Header from "../components/Header";
import Helmet from "../components/Helmet";
import { ordersRows } from "../data/data";
import { FlexBox, PageBox } from "../styles/themeStyles";
import { GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const ordersColumns: GridColDef[] = [
  {
    field: "image",
    headerName: "Image",
    minWidth: 100,
    flex: 0.9,
    headerAlign: "center",
    renderCell: (params) => {
      return (
        <img
          src={params.row.image}
          alt=""
          style={{
            width: "83px",
            height: "75px",
            objectFit: "cover",
            borderRadius: "11px",
          }}
        />
      );
    },
  },
  {
    field: "item",
    headerName: "Item",
    minWidth: 70,
    flex: 0.8,
    headerAlign: "center",
  },
  {
    field: "customerName",
    headerName: "Customer Name",
    width: 100,
    flex: 1,
    headerAlign: "center",
  },
  {
    field: "totalAmount",
    headerName: "Total Amount",
    minWidth: 80,
    flex: 0.9,
    headerAlign: "center",
  },
  {
    field: "status",
    headerName: "Status",
    minWidth: 70,
    flex: 0.8,
    headerAlign: "center",
    renderCell: (params) => {
      return (
        <Box
          sx={{
            backgroundColor: params.row.statusBg,
            padding: "4px 10px",
            borderRadius: "15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          {params.formattedValue}
        </Box>
      );
    },
  },
  {
    field: "id",
    headerName: "Order ID",
    minWidth: 70,
    flex: 0.8,
    headerAlign: "center",
  },
  {
    field: "location",
    headerName: "Location",
    minWidth: 60,
    flex: 0.7,
    headerAlign: "center",
  },
];

const Orders = () => {
  const columns = useMemo(
    () =>
      ordersColumns.map((col) =>
        col.field === "image" ? { ...col, sortable: false } : col
      ),
    []
  );
  return (
    <Helmet title="Orders">
      <PageBox>
        <Header title="Orders" category="Page" />
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
              rows={ordersRows}
              height={100}
              checked={false}
              searchable={false}
            />
          </Box>
        </FlexBox>
      </PageBox>
    </Helmet>
  );
};

export default Orders;
