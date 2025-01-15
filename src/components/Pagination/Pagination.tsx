import { Table } from "@tanstack/react-table";
import { Project } from "../../types/project.types";
import "./Pagination.css";

interface PaginationProps {
  table: Table<Project>;
}

const Pagination = ({ table }: PaginationProps) => {
  return (
    <div className="pagination">
      <div className="pagination-controls">
        <button
          onClick={() => {
            console.log("hello");
            table.firstPage();
          }}
          disabled={!table.getCanPreviousPage()}
        >
          First
        </button>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>

        <span className="page-info">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>

        <button
          onClick={() => {
            console.log("next");
            table.nextPage();
          }}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>
        <button
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          Last
        </button>
      </div>

      {/* <div className="page-size">
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
        >
          {[5, 10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div> */}
    </div>
  );
};

export default Pagination;
