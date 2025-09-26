import React, { useMemo, useState } from "react";

const DataTable = ({ headers, rows, onRowClick }) => {
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  const filteredRows = useMemo(() => {
    if (!searchValue) return rows;
    const lowerSearch = searchValue.toLowerCase();
    return rows.filter((row) =>
      headers.some((col) =>
        String(row[col.key] || "").toLowerCase().includes(lowerSearch)
      )
    );
  }, [searchValue, headers, rows]);

  const toggleFavourite = (rowIndex) => {
    setFavourites((prev) =>
      prev.includes(rowIndex)
        ? prev.filter((i) => i !== rowIndex) 
        : [...prev, rowIndex] 
    );
  };

  const favouriteRows = favourites.map((i) => rows[i]);

  return (
    <div>
      <input
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            {headers.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
            <th>Favourite</th>
          </tr>
        </thead>
        <tbody>
          {filteredRows.map((row, rowIndex) => {
            const isFav = favourites.includes(rowIndex);
            return (
              <tr
                key={rowIndex}
                style={{ backgroundColor: isFav ? "#ffeaa7" : "transparent" }}
                onClick={() => onRowClick(row)}
              >
                {headers.map((col) => (
                  <td key={col.key}>{row[col.key]}</td>
                ))}
                <td>
                  <button onClick={() => toggleFavourite(rowIndex)}>
                    {isFav ? "Favourite" : "Add to favourite"}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h3>Favourite List</h3>
      <ul>
        {favouriteRows.map((row, index) => (
          <li key={index}>
            {headers.map((col) => `${col.label}: ${row[col.key]} `).join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataTable;
