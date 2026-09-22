"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";

export default function UserDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    // Clear authentication/session here
    console.log("Logout");

    // Example:
    // localStorage.removeItem("token");

    window.location.href = "/login";
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* User Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 rounded-lg p-2 hover:bg-gray-100"
      >
        <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
                AC
            </div>

            <div className="hidden md:block">
                <p className="text-sm font-medium">
                Acme Corp
                </p>

                <p className="text-xs text-gray-500">
                Recruiter
                </p>
            </div>
        </div>

        <ChevronDown
          className={`hidden h-4 w-4 text-gray-500 transition-transform md:block ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 z-50 mt-2 w-56 rounded-xl border bg-white p-2 shadow-lg">
          {/* Profile */}
          <a
            href="/profile"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <User className="h-4 w-4" />
            Profile
          </a>

          {/* Settings */}
          <a
            href="/settings"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Settings className="h-4 w-4" />
            Settings
          </a>

          <div className="my-2 border-t" />

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}