const TableSkeleton = () => {
  return (
    <div className="container">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {Array.from({ length: 3 }).map((_, index) => (
                <th key={index}>
                  <div className="skeleton-header" />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: 3 }).map((_, colIndex) => (
                  <td key={colIndex}>
                    <div className="skeleton-cell" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <div className="pagination-controls">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="skeleton-button" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableSkeleton;
