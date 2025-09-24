import React, { useState, useMemo } from "react";

const DataTable = ({ headers, rows, onRowClick }) => {
  const [search, setSearch] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

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

  const handleSort = (key) => {
    if (sortConfig.key === key) {
      setSortConfig({
        key,
        direction: sortConfig.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSortConfig({ key, direction: "asc" });
    }
  };

  const sortedRows = useMemo(() => {
    let sortable = [...filteredRows];
    if (sortConfig.key) {
      sortable.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortable;
  }, [filteredRows, sortConfig]);

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
              <th
                key={col.key}
                onClick={() => handleSort(col.key)}
                style={{ cursor: "pointer" }}
              >
                {col.label}{" "}
                {sortConfig.key === col.key
                  ? sortConfig.direction === "asc"
                    ? "↑"
                    : "↓"
                  : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row, idx) => (
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
