
import React, { useState, useMemo } from "react";

const DataTable = ({ headers, rows, onRowClick }) => {
  const [search, setSearch] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);

  const filteredRows = useMemo(() => {
    console.log("Filtering rows only when rows/headers/search changes");
    if (!search) return rows;
    return rows.filter((row) =>
      headers.some((col) =>
        String(row[col.key]).toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [rows, headers, search]);

  const handleRowClick = (row) => {
    setSelectedRow(row);
    if (onRowClick) onRowClick(row);
  };


  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px" }}
      />

      <table
        border="1"
        cellPadding="8"
        cellSpacing="0"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            {headers.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredRows.map((row, idx) => (
            <tr
              key={idx}
              onClick={() => handleRowClick(row)}
              style={{
                backgroundColor:
                  selectedRow === row
                    ? "#d3f4ff"
                    : idx % 2 === 0
                    ? "#f9f9f9"
                    : "white",
                cursor: "pointer",
              }}
            >
              {headers.map((col) => (
                <td key={col.key}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
