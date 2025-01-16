import Table from "../components/Table/Table";
import { columns } from "../components/Table/tableOptions";

const Loading = () => {
  return <Table data={[]} columns={columns} isLoading={true} pageSize={5} />;
};

export default Loading;
