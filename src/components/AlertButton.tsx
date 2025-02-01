"use client";

import { ReactNode, useState } from "react";
import type { MouseEvent } from "react";

interface AlertButtonProps {
  children: ReactNode;
  className?: string;
}

const AlertButton = ({ children, className }: AlertButtonProps) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  return (
    <>
      <button onClick={handleClick} className={className}>
        {children}
      </button>
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-4 rounded-xl shadow-2xl border border-[#036dd7]/20 transition-all duration-300 z-50 ${
          showAlert ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="text-[#036dd7]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-gray-600 font-medium">敬请期待</p>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          showAlert ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowAlert(false)}
      />
    </>
  );
};

export default AlertButton;
