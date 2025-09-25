import React, { useMemo, useState } from "react";

const DataTable = ({ headers, rows, onRowClick }) => {
  const [searchValue, setSearchValue] = useState("");



  const filteredRows = useMemo(() => {
    if (!searchValue) return rows;

    const lowerSearch = searchValue.toLowerCase

    return rows.filter((row)=>(
       headers.some((col)=>(
         String(row[col.key] || "").toLowerCase().includes(searchValue) 
       ))
    ))

  }, [searchValue, headers, rows]);



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
            {headers.map((col) => {
              return <th key={col.key}>{col.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {filteredRows?.map((row,rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((col) => (
                <td>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;


