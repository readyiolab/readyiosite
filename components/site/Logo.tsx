import Link from "next/link";

export function Logo({
  className = "",
  variant = "full",
}: {
  className?: string;
  variant?: "full" | "icon";
}) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-1.5 font-bold tracking-tight text-xl sm:text-2xl text-foreground transition-opacity hover:opacity-90 ${className}`}
      aria-label="zuvigo home"
    >
      <span className="font-heading font-extrabold tracking-tight text-[#111827] dark:text-white">
        zuvigo
      </span>
    </Link>
  );
}
