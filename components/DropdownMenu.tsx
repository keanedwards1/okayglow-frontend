// components/DropdownMenu.tsx

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center text-inherit focus:outline-none menu-button transition-colors duration-200"
      >
        <span className="text-lg">Menu</span>
        <svg
          className={`ml-1 h-5 w-4 transition-transform duration-200 menu-svg ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`absolute left-0 mt-2 w-40 bg-cream shadow-md rounded-sm overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform -translate-y-0 pointer-events-none"
        }`}
      >
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <Link
            href="/"
            className="block px-4 py-2 text-sm transition-colors duration-200 hover:underline font-source-sans"
            role="menuitem"
          >
            Home
          </Link>
          <Link
            href="/quiz"
            className="block px-4 py-2 text-sm transition-colors duration-200 hover:underline font-source-sans"
            role="menuitem"
          >
            Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}
