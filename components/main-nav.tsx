"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  // Debugging logs
  console.log("Categories data:", data); // Check if categories are being passed correctly
  console.log("Current pathname:", pathname); // Check the current path

  if (!data || data.length === 0) {
    console.warn("No category data provided. Navigation links will not render.");
  }

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black",
            route.active ? "text-black" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
      {/* Debugging UI */}
      {(!data || data.length === 0) && (
        <div className="text-sm text-red-500">
          Warning: No categories available to display.
        </div>
      )}
    </nav>
  );
};

export default MainNav;
