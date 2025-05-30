import React, { useEffect, useState } from "react";
import './index.css'

const TodoFooter = ({ remaining, currentFilter, onFilterChange }) => {
  return (
    <div className="footer">
      <span>{remaining}개 남음</span>
      <div>
        <button
          onClick={() => onFilterChange("all")}
          className={currentFilter === "all" ? "active" : ""}
        >
          전체
        </button>
        <button
          onClick={() => onFilterChange("active")}
          className={currentFilter === "active" ? "active" : ""}
        >
          예정된 할 일
        </button>
        <button
          onClick={() => onFilterChange("completed")}
          className={currentFilter === "completed" ? "active" : ""}
        >
          완료된 할 일
        </button>
      </div>
    </div>
  );
};

export default TodoFooter;