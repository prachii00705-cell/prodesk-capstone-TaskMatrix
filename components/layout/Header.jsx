"use client";

import { useSelector } from "react-redux";
import Avatar from "@/components/ui/Avatar";

export default function Header() {
  const user = useSelector((state) => state.auth.user);

  return (
    <header className="topbar" aria-label="Top navigation">
      <div className="topbar-title">TaskMatrix</div>
      <div className="topbar-search" aria-label="Search">
        <input
          type="search"
          placeholder="Search projects, tasks..."
          aria-label="Search projects and tasks"
        />
      </div>
      <div className="topbar-actions">
        <button
          type="button"
          aria-label="Notifications"
          className="icon-button"
        >
          🔔
        </button>
        <div className="profile-pill">
          <Avatar
            initials={
              user?.name
                ?.split(" ")
                .map((part) => part[0])
                .slice(0, 2)
                .join("") || "TS"
            }
            size="sm"
            tone="blue"
          />
          <span>{user?.name || "Task User"}</span>
        </div>
      </div>
    </header>
  );
}
