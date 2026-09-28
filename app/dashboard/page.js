"use client";

import { useSelector } from "react-redux";
import AppLayout from "@/components/layout/AppLayout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { mockProjects } from "@/services/api/projects";

const summaryCards = [
  {
    label: "Total Projects",
    value: "12",
    change: "+2 from last month",
    tone: "blue",
  },
  {
    label: "Tasks in Progress",
    value: "28",
    change: "+5 from last week",
    tone: "amber",
  },
  {
    label: "Completed Tasks",
    value: "156",
    change: "+32 from last week",
    tone: "green",
  },
  {
    label: "Overdue Tasks",
    value: "7",
    change: "-2 from yesterday",
    tone: "red",
  },
];

export default function DashboardPage() {
  const user = useSelector((state) => state.auth.user);
  const projects = useSelector((state) =>
    state.projects.items.length ? state.projects.items : mockProjects,
  );

  return (
    <ProtectedRoute>
      <AppLayout>
        <div className="dashboard-page">
          <div className="section-header">
            <div>
              <p className="eyebrow">Welcome back</p>
              <h1>{user?.name || "Aarav"} </h1>
            </div>
          </div>

          <div className="summary-grid">
            {summaryCards.map((card) => (
              <div key={card.label} className="summary-card">
                <div className="summary-head">
                  <span>{card.label}</span>
                </div>
                <div className="summary-value">{card.value}</div>
                <div className="summary-change">{card.change}</div>
              </div>
            ))}
          </div>

          <div className="dashboard-panels">
            <section className="panel large-panel">
              <div className="panel-header">
                <h2>Project Overview</h2>
              </div>
              <div
                className="chart-placeholder"
                aria-label="Project overview chart"
              >
                <div className="chart-line chart-one" />
                <div className="chart-line chart-two" />
              </div>
            </section>

            <section className="panel">
              <div className="panel-header">
                <h2>Upcoming Tasks</h2>
              </div>
              <ul className="task-list compact">
                {[
                  "Homepage Redesign",
                  "API Integration",
                  "Client Review Meeting",
                  "User Documentation",
                ].map((task, index) => (
                  <li key={task}>
                    <span>{task}</span>
                    <span
                      className={`badge badge-${index % 2 === 0 ? "warning" : "info"}`}
                    >
                      {index % 2 === 0 ? "High" : "Medium"}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="dashboard-panels lower-panels">
            <section className="panel">
              <div className="panel-header">
                <h2>Recent Projects</h2>
              </div>
              <div className="project-list">
                {projects.slice(0, 4).map((project) => (
                  <div key={project.id} className="project-row">
                    <div className="project-meta">
                      <span className="project-dot" />
                      <div>
                        <strong>{project.name}</strong>
                        <small>{project.status}</small>
                      </div>
                    </div>
                    <div className="project-progress-wrap">
                      <div className="progress-bar">
                        <span style={{ width: `${project.progress}%` }} />
                      </div>
                    </div>
                    <span>{project.progress}%</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="panel">
              <div className="panel-header">
                <h2>Recent Activity</h2>
              </div>
              <ul className="activity-list">
                {[
                  {
                    text: "Varun Sharma completed the task Create Wireframes",
                    time: "2 hours ago",
                  },
                  {
                    text: "Rohan Mehta updated the design system",
                    time: "3 hours ago",
                  },
                  {
                    text: "Priya Singh commented on the mobile app sprint",
                    time: "5 hours ago",
                  },
                ].map((item) => (
                  <li key={item.text}>
                    <div className="activity-bullet" />
                    <div>
                      <p>{item.text}</p>
                      <small>{item.time}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </AppLayout>
    </ProtectedRoute>
  );
}
