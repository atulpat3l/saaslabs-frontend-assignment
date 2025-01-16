import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  ColumnDef,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { ReactNode, useState } from "react";
import "./Table.css";
import TableSkeleton from "./TableSkeleton";
import { RefreshCcwIcon } from "lucide-react";
import TableHeader from "./TableHeader";
import Pagination from "../Pagination/Pagination";

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
  isLoading?: boolean;
  isError?: boolean;
  pageSize?: number;
  onRetry?: () => void;
  showControls?: boolean;
}

const Table = <T,>({
  data,
  columns,
  isLoading = false,
  isError = false,
  pageSize = 5,
  onRetry,
  showControls = false,
}: TableProps<T>) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize,
  });
  const [columnVisibility, setColumnVisibility] = useState({});
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination,
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      pagination,
      columnVisibility,
      globalFilter,
    },
  });

  if (isError) {
    return (
      <div className="error-container">
        <span className="error-message">Error fetching table data</span>
        <button onClick={onRetry} className="retry-button">
          <RefreshCcwIcon size={16} /> Retry
        </button>
      </div>
    );
  }

  if (isLoading) return <TableSkeleton pageSize={pageSize} />;

  return (
    <div className="container">
      <div className="table-container">
        {showControls && (
          <TableHeader
            onSearch={(value) => table.setGlobalFilter(value)}
            columns={table.getAllColumns().map((column) => ({
              id: column.id,
              label: column.columnDef.header as string,
              isVisible: column.getIsVisible(),
              toggle: () => column.toggleVisibility(),
            }))}
          />
        )}
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr className="table-row" key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>{cell.getValue() as ReactNode}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination table={table} />
    </div>
  );
};

export default Table;
