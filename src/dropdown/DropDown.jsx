import React, { useState, useEffect, useRef } from "react";
import "./DropDown.css";
const DropDown = ({ onScrollClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScroll = (id) => {
    // Look for the element by ID directly in the DOM
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const listItemStyle = {
    padding: "5px 15px",
    cursor: "pointer",
    background: "none",
    color: "#000000",
    backgroundColor: "transparent",
    transition: "background-color 0.3s",
  };

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        background: "none",
      }}
      ref={dropdownRef}
    >
      <button
        style={{
          border: "0",
          background: "transparent",
          cursor: "pointer",
        }}
        onClick={toggleDropdown}
      >
        <i
          className={`ri icon ${
            isOpen ? "ri-close-line rotate" : "ri-bar-chart-horizontal-line"
          }`}
        ></i>
      </button>
      {isOpen && (
        <ul
          style={{
            opacity: 0.8,
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "white",
            padding: "5px",
            margin: "5px 0 0 0",
            listStyle: "none",
            minWidth: "40px",
            borderTopRightRadius: "5px",
            borderTopLeftRadius: "5px",
            zIndex: 10,
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          {textDropdown.map((item, index) => {
            const itemStyle = { ...listItemStyle };
            if (index === selectedIndex) {
              itemStyle.backgroundColor = "#f0f0f0";
              handleScroll(item);
              setSelectedIndex(null);
            }
            return (
              <li
                className="dropdown-item"
                key={index}
                style={itemStyle}
                onClick={() => setSelectedIndex(index)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};


const textDropdown = ["Location", "Date", "Photo", "Program"];
export default DropDown;
