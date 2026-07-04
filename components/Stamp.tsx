import type { ReactNode } from "react";

export function Stamp({
  children,
  color,
  className = "",
}: {
  children: ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <span className={`stamp ${className}`} style={color ? { color } : undefined}>
      {children}
    </span>
  );
}
