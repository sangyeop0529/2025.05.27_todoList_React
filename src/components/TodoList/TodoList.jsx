import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: "123", text: "공부하기", status: "active" },
    { id: "124", text: "청소하기", status: "active" },
  ]);
  return (
    <div>
      {todos.map((item) => (
        <li key={item.key}>{item.text}</li>
      ))}
    </div>
  );
};

export default TodoList;
