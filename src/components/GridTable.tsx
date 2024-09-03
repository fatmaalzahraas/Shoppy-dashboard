import Box from "@mui/material/Box";
import {
  DataGrid,
  GridColDef,
  GridPagination,
  GridRenderPaginationProps,
  GridRowId,
  GridToolbar,
  GridToolbarContainer,
  gridPageCountSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Customer, Employee, Order } from "../types/types";
import {
  Button,
  Pagination,
  PaginationItem,
  TablePaginationProps,
  Typography,
} from "@mui/material";
import { memo, useState } from "react";
import { FlexBox } from "../styles/themeStyles";

type GridTableProps = {
  columns: GridColDef[];
  rows: (Order | Employee | Customer)[];
  height: number;
  checked: boolean;
  searchable: boolean;
};
const MuiPagination = ({
  page,
  onPageChange,
  className,
}: Pick<TablePaginationProps, "page" | "onPageChange" | "className">) => {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      className={className}
      page={page + 1}
      count={pageCount}
      onChange={(event, newPage) => {
        onPageChange(event as never, newPage - 1);
      }}
      showFirstButton
      showLastButton
      renderItem={(item) => (
        <PaginationItem
          {...item}
          size="small"
          sx={
            item.selected
              ? {
                  backgroundColor: "#e91e63!important",
                  color: "#fff",
                  fontSize: "0.82rem",
                }
              : { fontSize: "0.82rem", color: "rgba(0, 0, 0, 0.87)" }
          }
        />
      )}
    />
  );
};
const CustomPagination = (props: GridRenderPaginationProps) => {
  return <GridPagination ActionsComponent={MuiPagination} {...props} />;
};
const GridTable = memo(
  ({ columns, rows, height, checked, searchable }: GridTableProps) => {
    const [selectedRows, setSelectedRows] = useState<GridRowId[]>([]);
    const [open, setOpen] = useState(false);
    const [rowsData, setRowsData] = useState(rows);

    const handleClose = () => {
      setOpen(false);
    };
    const handleDelete = () => {
      if (selectedRows.length === 0) {
        setOpen(true);
      } else {
        setOpen(false);
        const updatedRows = rowsData.filter(
          (row) => !selectedRows.includes(row.id)
        );
        setRowsData(updatedRows);
      }
    };
    return (
      <Box sx={{ minHeight: "100vh", width: "100%", position: "relative" }}>
        <DataGrid
          rows={rowsData}
          columns={columns}
          rowHeight={height}
          pagination
          slots={{
            pagination: CustomPagination,
            toolbar: checked
              ? () => (
                  <GridToolbarContainer
                    style={{
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      paddingBottom: "5px",
                    }}
                  >
                    <Box>
                      <Button
                        variant="text"
                        size="small"
                        startIcon={
                          <DeleteIcon sx={{ color: "#424242 !important" }} />
                        }
                        onClick={handleDelete}
                        sx={{
                          textTransform: "capitalize",
                          color: "#000",
                          fontSize: "0.9rem",
                          paddingTop: "0px",
                          paddingBottom: "1px",
                          "&:hover": {
                            backgroundColor: "#e0e0e0",
                            borderRadius: 0,
                          },
                        }}
                      >
                        Delete
                      </Button>
                      {/*searchable && <GridToolbarQuickFilter />*/}
                    </Box>
                  </GridToolbarContainer>
                )
              : searchable
              ? GridToolbar
              : null,
          }}
          slotProps={{
            footer: { sx: { justifyContent: "center" } },
            cell: { align: "center" },
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
              printOptions: { disableToolbarButton: true },
              csvOptions: { disableToolbarButton: true },
            },
          }}
          onRowSelectionModelChange={(rowSelectionModel) =>
            setSelectedRows([...rowSelectionModel])
          }
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 12,
              },
            },
          }}
          pageSizeOptions={[12]}
          checkboxSelection={checked ? true : false}
          disableRowSelectionOnClick={checked ? false : true}
          disableColumnMenu
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          sx={{
            fontSize: "0.81rem",
            color: "#000",
            borderColor: "rgba(224, 224, 224, 1)",
            "& .MuiDataGrid-withBorderColor": {
              borderColor: "rgba(224, 224, 224, 1)",
            },
            "& .MuiDataGrid-columnSeparator--sideRight": {
              opacity: "0 !important",
            },
            "& .MuiDataGrid-virtualScroller": {
              overflowY: "hidden",
            },
            "& .Mui-checked": {
              color: "#e91e63 !important",
            },
            "& .MuiCheckbox-root": {
              color: "rgba(0, 0, 0, 0.6)",
            },
            "& .MuiDataGrid-row.Mui-selected, & .MuiDataGrid-row.Mui-selected.Mui-hovered":
              {
                backgroundColor: "#f5f5f5",
              },
            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: 600,
              fontSize: "0.78rem",
              color: "#757575",
            },
            "& .MuiDataGrid-toolbarContainer": {
              backgroundColor: "#fafafa",
              borderBottom: "1px solid rgba(224, 224, 224, 1)",
              ".MuiBox-root": {
                flex: { xs: 0.5, sm: 1 },
              },
              ".MuiFormControl-root": {
                width: "200px",
              },
            },
            "& .MuiInputBase-root": {
              fontSize: "0.87rem",
              color: "#424242",
              flexDirection: "row-reverse",
              ".MuiSvgIcon-root": {
                fontSize: "1rem",
                color: "#757575",
              },
              ".MuiButtonBase-root": {
                display: "none",
              },
            },
            "& .MuiInput-underline:after": {
              borderColor: "#e57373",
            },
            ".MuiDataGrid-sortIcon": {
              color: 'rgba(0, 0, 0, 0.54)'
            }
          }}
        />
        {open && (
          <FlexBox
            sx={{
              backgroundColor: "rgba(0,0,0,0.3)",
              zIndex: 5,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#fff",
                width: { sm: "350px" },
                padding: "15px 8px 8px 15px",
                display: "flex",
                flexDirection: "column",
                rowGap: "19px",
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: "#000", fontSize: "0.85rem" }}
              >
                No records selected for delete operation
              </Typography>
              <Button
                variant="text"
                disableRipple
                sx={{
                  color: "#e91e63",
                  alignSelf: "flex-end",
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  padding: "4px 0px",
                  minWidth: "40px",
                }}
                onClick={handleClose}
              >
                OK
              </Button>
            </Box>
          </FlexBox>
        )}
      </Box>
    );
  }
);
export default GridTable;
