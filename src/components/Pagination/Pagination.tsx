import { Table } from "@tanstack/react-table";
import "./Pagination.css";

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
            First
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </button>
        </div>

        <div className="page-info">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>

        <div className="controls-button">
          <button
            onClick={() => table.nextPage()}
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
      </div>
    </div>
  );
};

export default Pagination;
