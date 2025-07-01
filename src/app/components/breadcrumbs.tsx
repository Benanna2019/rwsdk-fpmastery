import { clsx } from "clsx";
import type React from "react";

export function Breadcrumbs(props: React.ComponentProps<"nav">) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-x-2 text-sm/6"
      {...props}
    />
  );
}

export function BreadcrumbHome() {
  return (
    <a href="/" className="min-w-0 shrink-0 text-gray-950 dark:text-white">
      Compass
    </a>
  );
}

export function Breadcrumb({
  href,
  children,
  className,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
}) {
  if (href) {
    return (
      <a
        href={href}
        className={clsx(
          className,
          "min-w-0 truncate text-gray-950 dark:text-white",
        )}
      >
        {children}
      </a>
    );
  }

  return (
    <span
      className={clsx(
        className,
        "min-w-0 truncate text-gray-950 last:text-gray-600 dark:last:text-gray-400",
      )}
    >
      {children}
    </span>
  );
}

export function BreadcrumbSeparator({ className }: { className?: string }) {
  return (
    <span className={clsx(className, "text-gray-950/25 dark:text-white/25")}>
      /
    </span>
  );
}
