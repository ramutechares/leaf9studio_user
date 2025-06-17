import React from "react";
import { NavLink } from "react-router-dom";

const Weddingmenu = () => {
  const menuItems = [
    { name: "Tamil Wedding", path: "/tamil-wedding" },
    { name: "Telugu Wedding", path: "/telugu-wedding" },
    { name: "Christian Wedding", path: "/christian-wedding" },
    { name: "Post & Pre Wedding", path: "/postpre-wedding" },
    { name: "New Born", path: "/newborn-wedding" },
  ];

  return (
    <nav className="d-flex justify-content-center bg-light pb-4 shadow-sm wedding-nv-tabs">
      <ul className="nav nav-pills gap-3">
        {menuItems.map((item) => (
          <li className="nav-item" key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `nav-link px-4 py-2 rounded-pill fw-semibold ${
                  isActive
                    ? "active text-white bg-primary"
                    : "text-dark bg-white border border-secondary"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Weddingmenu;
