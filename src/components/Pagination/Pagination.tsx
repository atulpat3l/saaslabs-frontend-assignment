import { Table } from "@tanstack/react-table";
import "./Pagination.css";
import { ChevronRightIcon } from "lucide-react";
import {
  ChevronLeftIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";

interface PaginationProps<T> {
  table: Table<T>;
}

const Pagination = <T,>({ table }: PaginationProps<T>) => {
  return (
    <div className="pagination">
      <div className="pagination-controls">
        <div className="controls-button">
          <button
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="pagination-button-text">First</span>
            <span className="pagination-button-icon">
              <ChevronsLeftIcon size={16} />
            </span>
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="pagination-button-text">Previous</span>
            <span className="pagination-button-icon">
              <ChevronLeftIcon size={16} />
            </span>
          </button>
        </div>

        <div className="page-info">
          <span className="page-info-text">Page</span>{" "}
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </div>

        <div className="controls-button">
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="pagination-button-text">Next</span>
            <span className="pagination-button-icon">
              <ChevronRightIcon size={16} />
            </span>
          </button>
          <button
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="pagination-button-text">Last</span>
            <span className="pagination-button-icon">
              <ChevronsRightIcon size={16} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
