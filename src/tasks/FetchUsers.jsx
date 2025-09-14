import React, { useEffect, useState } from "react";

const FetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {loading && <p>Loading....</p>}
      {error && (
        <div style={{ color: "red" }}>
          <p>{error}</p>
          <button onClick={fetchUsers}>Retry</button>
        </div>
      )}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} | {user.email} | {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchUsers;
