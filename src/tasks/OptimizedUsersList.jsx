import React, { useState, useMemo, useCallback } from "react";
// import UserRow from "./UserRow";
import ChildCompo from "./ChildCompo";

const OptimizedUsersList = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [search, setSearch] = useState("");

  const users = useMemo(
    () =>
      Array.from({ length: 10000 }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        city: `City ${i + 1}`,
      })),
    []
  );

  const handleClick = useCallback((id) => {
    setSelectedId(id);
    console.log("Clicked user", id);
  }, []);



  const filteredData = useMemo(() => {
    if (!search) return users;
    const lowerSearch = search.toLowerCase();

    return users.filter((user) =>
      Object.values(user).some((value) =>
        String(value).toLowerCase().includes(lowerSearch)
      )
    );
  }, [search, users]);

  console.log(filteredData, "filteredData");

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h6>Selected User ID: {selectedId}</h6>
      <ul>
        {filteredData.map((user) => (
          <ChildCompo key={user.id} user={user} onClick={handleClick} />
        ))}
      </ul>
    </div>
  );
};

export default OptimizedUsersList;
