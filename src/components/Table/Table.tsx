import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  ColumnDef,
  Table as ReactTable,
} from "@tanstack/react-table";
import { ReactNode, useState } from "react";
import "./Table.css";
import TableSkeleton from "./TableSkeleton";

interface TableProps<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
  isLoading?: boolean;
  isError?: boolean;
  pageSize?: number;
  children?: (table: ReactTable<T>) => ReactNode;
}

const Table = <T,>({
  data,
  columns,
  isLoading = false,
  isError = false,
  pageSize = 5,
  children,
}: TableProps<T>) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  if (isError) return <div>Error</div>;
  if (isLoading) return <TableSkeleton />;

  return (
    <div className="container">
      <div className="table-container">
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
      {children && children(table)}
    </div>
  );
};

export default Table;
