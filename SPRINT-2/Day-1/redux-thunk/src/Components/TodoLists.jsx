import React from "react";
import { Link } from "react-router-dom";

export const TodoLists = ({ todoList }) => {
  return (
    <div>
      {todoList?.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/todo/${item.id}`}>
              <div>
                {item.title}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
