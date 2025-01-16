import { createColumnHelper } from "@tanstack/react-table";
import { Project } from "../../types/project.types";

const columnHelper = createColumnHelper<Project>();

export const columns = [
  columnHelper.accessor((row) => row["s.no"], {
    header: "S.No",
    id: "serialNumber",
  }),
  columnHelper.accessor((row) => row["percentage.funded"], {
    header: "Percentage Funded",
    id: "percentageFunded",
  }),
  columnHelper.accessor((row) => `$${row["amt.pledged"]}`, {
    header: "Amount Pledged",
    id: "amountPledged",
  }),
];
