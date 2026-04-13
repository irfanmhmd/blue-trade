export function Card({ className = "", children }) {
  return <div className={`glass p-4 ${className}`}>{children}</div>;
}
