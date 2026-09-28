"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/slices/authSlice";
import { clearSession } from "@/services/api/auth";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Projects", href: "/projects" },
  { label: "My Tasks", href: "/tasks" },
  { label: "Team", href: "/team" },
  { label: "Calendar", href: "/calendar" },
  { label: "Reports", href: "/reports" },
  { label: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    clearSession();
    dispatch(logout());
  };

  return (
    <aside className="sidebar" aria-label="Sidebar navigation">
      <div className="sidebar-brand">TaskMatrix</div>
      <nav>
        <ul className="sidebar-nav">
          {navItems.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`nav-link ${active ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          {isAuthenticated ? (
            <li>
              <button
                type="button"
                className="logout-button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    </aside>
  );
}
