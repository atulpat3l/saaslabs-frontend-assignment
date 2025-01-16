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
  columnHelper.accessor((row) => `${row["amt.pledged"]}`, {
    header: "Amount Pledged",
    id: "amountPledged",
  }),
  columnHelper.accessor((row) => row["currency"], {
    header: "Currency",
    id: "currency",
  }),
  columnHelper.accessor(
    (row) => `${new Date(row["end.time"]).toLocaleDateString()}`,
    {
      header: "End Time",
      id: "endTime",
    }
  ),
  columnHelper.accessor((row) => row["num.backers"], {
    header: "Backers",
    id: "backers",
  }),
  columnHelper.accessor((row) => row["state"], {
    header: "State",
    id: "state",
  }),
  columnHelper.accessor((row) => row["country"], {
    header: "Country",
    id: "country",
  }),
];
