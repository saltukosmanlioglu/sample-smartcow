import React from "react";

import { TableProps } from "./types";
import "./Table.scss";

const Table: React.FunctionComponent<TableProps> = ({ columns, rows }) => {
  return (
    <div className="table">
      <div className="table-header">
        {columns.map((column, index) => (
          <div onClick={() => column.onClick?.()} key={index}>
            <p>{column.title}</p>
            {column.icon && <img src={column.icon} alt="Icon" />}
          </div>
        ))}
      </div>
      <div className="table-body">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {columns.map((col) => (
              <div key={`row_${row.id}_col_${col.title}`}>
                {col.render?.() || row[col.name]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
