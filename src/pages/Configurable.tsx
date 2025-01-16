import Table from "../components/Table/Table";
import { columns } from "../components/Table/tableOptions";
import { API_URL } from "../utils/constants";
import { Project } from "../types/project.types";
import { useFetch } from "../hooks/useFetch";

const Configurable = () => {
  const { data, isLoading, isError, refetch } = useFetch<Project[]>(API_URL);

  return (
    <Table
      data={data ?? []}
      columns={columns}
      isLoading={isLoading}
      isError={isError}
      pageSize={50}
      onRetry={refetch}
      showControls={true}
    />
  );
};

export default Configurable;
