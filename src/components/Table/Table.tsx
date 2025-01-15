import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../utils/constants";
import { Project } from "../../types/project.types";
import { columns } from "./tableOptions";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";
import "./Table.css";

const fallbackData: Project[] = [];
const Table = () => {
  const { data, isLoading, isError } = useFetch<Project[]>(API_URL);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  if (isError) return <div>Error</div>;

  const table = useReactTable({
    data: data ?? fallbackData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  if (isLoading) return <div>Loading...</div>;
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
                {row.getVisibleCells().map((cell: any) => (
                  <td key={cell.id}>{cell.getValue()}</td>
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
