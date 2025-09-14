import React from "react";
import useFetchUsers from "./useFetchUsers";

const UsersWithReducer = () => {
  const { users, loading, error, retry } = useFetchUsers(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && (
        <div>
          <p style={{ color: "red" }}>{error}</p>
          <button onClick={retry}>Retry</button>
        </div>
      )}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersWithReducer;
