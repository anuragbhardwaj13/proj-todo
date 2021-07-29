import React from "react";
import { FaTrash } from "react-icons/fa";
const List = ({ items, removeTask }) => {
  return (
    <div className="list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="item">
            <p className="title">{title}</p>
            <button
              type="button"
              className="delete-btn"
              onClick={() => removeTask(id)}
            >
              <FaTrash></FaTrash>
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default List;
