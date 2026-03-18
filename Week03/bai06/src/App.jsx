import { useEffect, useReducer } from "react";

const initialState = {
  status: "idle",
  users: [],
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        status: "loading",
        error: null,
      };

    case "FETCH_SUCCESS":
      return {
        ...state,
        status: "success",
        users: action.payload,
        error: null,
      };

    case "FETCH_ERROR":
      return {
        ...state,
        status: "error",
        error: action.payload,
      };

    default:
      return state;
  }
}

export default function FetchUsers() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUsers = async () => {
    dispatch({ type: "FETCH_START" });

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      if (!response.ok) {
        throw new Error("Không thể tải dữ liệu");
      }

      const data = await response.json();

      dispatch({
        type: "FETCH_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_ERROR",
        payload: error.message,
      });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Bài 6 - Fetch Users State Machine</h2>

      {state.status === "idle" && <p>Chưa tải dữ liệu.</p>}

      {state.status === "loading" && <p>Đang tải...</p>}

      {state.status === "error" && (
        <div>
          <p style={{ color: "red" }}>Lỗi: {state.error}</p>
          <button onClick={fetchUsers}>Retry</button>
        </div>
      )}

      {state.status === "success" && (
        <div>
          <button onClick={fetchUsers} style={{ marginBottom: 12 }}>
            Reload
          </button>
          <ul>
            {state.users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
