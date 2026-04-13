export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition bg-teal-600 hover:bg-teal-500 disabled:opacity-60 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
