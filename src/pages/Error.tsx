import { useState } from "react";
import Pagination from "../components/Pagination/Pagination";
import Table from "../components/Table/Table";
import { columns } from "../components/Table/tableOptions";
import { useFetch } from "../hooks/useFetch";
import { Project } from "../types/project.types";
import { API_URL } from "../utils/constants";

const Error = () => {
  const [initialError, setInitialError] = useState(true);
  const { data, isLoading, isError, refetch } = useFetch<Project[]>(API_URL);
  return (
    <Table
      data={data ?? []}
      columns={columns}
      isLoading={isLoading}
      isError={isError || initialError}
      pageSize={5}
      onRetry={() => {
        setInitialError(false);
        refetch();
      }}
    >
      {(table) => <Pagination table={table} />}
    </Table>
  );
};

export default Error;
