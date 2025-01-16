import { useFetch } from "../hooks/useFetch";
import { API_URL } from "../utils/constants";
import { Project } from "../types/project.types";
import Table from "../components/Table/Table";
import Pagination from "../components/Pagination/Pagination";
import { columns } from "../components/Table/tableOptions";

const Home = () => {
  const { data, isLoading, isError } = useFetch<Project[]>(API_URL);

  return (
    <Table<Project>
      data={data ?? []}
      columns={columns}
      isLoading={isLoading}
      isError={isError}
      pageSize={5}
    >
      {(table) => <Pagination table={table} />}
    </Table>
  );
};

export default Home;
