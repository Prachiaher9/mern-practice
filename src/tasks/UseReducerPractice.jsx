import React, { useReducer } from "react";

const UseReducerPractice = () => {
  const initialState = { count: 10 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>UseReducerPractice</div>;<h1>Count {state.count}</h1>
      <button onClick={()=>dispatch({type : "DECREMENT"})}>Decrement</button>
    </>
  );
};

export default UseReducerPractice;
