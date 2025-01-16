import Table from "../components/Table/Table";
import { columns } from "../components/Table/tableOptions";

const Error = () => {
  return <Table data={[]} columns={columns} isError={true} pageSize={5} />;
};

export default Error;
