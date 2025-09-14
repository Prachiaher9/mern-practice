import React, { useState, useMemo, useCallback } from "react";
// import UserRow from "./UserRow";
import ChildCompo from "./ChildCompo";

const OptimizedUsersList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const users = useMemo(() => 
    Array.from({ length: 10000 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      city: `City ${i + 1}`,
    })), 
  []);

  const handleClick = useCallback((id) => {
    setSelectedId(id);
    console.log("Clicked user", id);
  }, []);

  return (
    <div>
      <h2>Selected User ID: {selectedId}</h2>
      <ul>
        {users.map((user) => (
          <ChildCompo key={user.id} user={user} onClick={handleClick} />
        ))}
      </ul>
    </div>
  );
};

export default OptimizedUsersList;
