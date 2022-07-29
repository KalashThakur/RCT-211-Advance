import React from "react";
import { Link } from "react-router-dom";

export const TodoLists = ({ todoLists }) => {
  return (
    <div>
      {todoLists?.map((item) => {
        return (
          <div key={item.id}>
              <div>{item.title}</div>
          </div>
        );
      })}
    </div>
  );
};
