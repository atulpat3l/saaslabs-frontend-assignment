import { ListFilterIcon, SearchIcon } from "lucide-react";
import * as Popover from "@radix-ui/react-popover";
import "./TableHeader.css";

interface TableHeaderProps<T> {
  onSearch: (value: string) => void;
  columns: {
    id: string;
    label: string;
    isVisible: boolean;
    toggle: () => void;
  }[];
}

const TableHeader = <T,>({ onSearch, columns }: TableHeaderProps<T>) => {
  return (
    <div className="table-header">
      <div className="search-container">
        <SearchIcon size={16} className="search-icon" />
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
          className="search-input"
        />
      </div>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className="view-button">
            <ListFilterIcon size={16} />
            View
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="popover-content" sideOffset={5}>
            <div className="columns-list">
              {columns.map((column) => (
                <label key={column.id} className="column-option">
                  <input
                    type="checkbox"
                    checked={column.isVisible}
                    onChange={column.toggle}
                  />
                  {column.label}
                </label>
              ))}
            </div>
            <Popover.Arrow className="popover-arrow" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

export default TableHeader;
