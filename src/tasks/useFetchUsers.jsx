import { useReducer, useEffect, useCallback } from "react";

const useFetchUsers = (url) => {
  const initialState = {
    users: [],
    loading: false,
    error: "",
  };

  const fetchReducer = (state, action) => {
    switch (action.type) {
      case "FETCH_START":
        return { ...state, loading: true, error: "" };
      case "FETCH_SUCCESS":
        return { ...state, loading: false, users: action.payload };
      case "FETCH_ERROR":
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const fetchUsers = useCallback(async () => {
    dispatch({ type: "FETCH_START" });

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err.message });
    }
  }, [url]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);


  return { ...state, retry: fetchUsers }; 
};

export default useFetchUsers;
