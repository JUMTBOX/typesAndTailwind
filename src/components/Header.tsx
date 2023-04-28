import React from "react";
import "../styles/header.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <ul>
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
        </ul>
        <button className="btn">버튼</button>
      </div>
    </>
  );
}
