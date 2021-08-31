import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={`bg-cardbg rounded-md w-full ${className}`}>{children}</div>
  );
}
