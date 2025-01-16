import Table from "../components/Table/Table";
import { columns } from "../components/Table/tableOptions";
import { useFetch } from "../hooks/useFetch";
import { Project } from "../types/project.types";
import { API_URL } from "../utils/constants";
import Pagination from "../components/Pagination/Pagination";
import { useEffect, useState } from "react";

const Loading = () => {
  const [delayedLoading, setDelayedLoading] = useState(true);
  const { data, isLoading, isError, refetch } = useFetch<Project[]>(API_URL);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Table
      data={data ?? []}
      columns={columns}
      isLoading={delayedLoading || isLoading}
      isError={isError}
      pageSize={5}
      onRetry={refetch}
    >
      {(table) => <Pagination table={table} />}
    </Table>
  );
};

export default Loading;
