import React from "react";
<<<<<<< HEAD

export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);
=======
import "./List.css";

export const List = ({ children }) => {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};
>>>>>>> 333358986ea8556c0d8cfe36a74d426f95efe22f
