import React, { useEffect } from "react";
import { useLocation } from "@docusaurus/router";

const WrapTables = () => {
  const location = useLocation();
  useEffect(() => {
    const tables = document.querySelectorAll("table");

    tables.forEach((table) => {
      if (!table.parentElement.classList.contains("table-container")) {
        const wrapper = document.createElement("div");
        wrapper.classList.add("table-container");
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
      }
    });
  }, [location.pathname]);

  return null;
};

export default WrapTables;
