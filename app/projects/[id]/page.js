"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import AppLayout from "@/components/layout/AppLayout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Badge from "@/components/ui/Badge";
import { useSelector } from "react-redux";
import { mockProjects } from "@/services/api/projects";

export default function ProjectDetailsPage() {
  const params = useParams();
  const projectId = params.id;
  const projects = useSelector((state) =>
    state.projects.items.length ? state.projects.items : mockProjects,
  );
  const project =
    projects.find((entry) => entry.id === projectId) || mockProjects[0];

  if (!project) {
    return (
      <ProtectedRoute>
        <AppLayout>
          <div className="empty-state">
            <h1>Project not found</h1>
            <Link href="/projects">Back to projects</Link>
          </div>
        </AppLayout>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <AppLayout>
        <div className="project-details-page">
          <div className="breadcrumbs">
            <Link href="/dashboard">Dashboard</Link>
            <span> / </span>
            <Link href="/projects">Projects</Link>
            <span> / {project.name}</span>
          </div>

          <section className="project-header-card">
            <div className="project-header-main">
              <div className="project-title-row">
                <div className="project-badge">TaskMatrix</div>
                <h1>{project.name}</h1>
              </div>
              <div className="project-status-row">
                <Badge tone="info">{project.status}</Badge>
                <Badge tone="warning">{project.priority}</Badge>
              </div>
            </div>
            <div className="header-actions">
              <button type="button" className="button button-secondary">
                Edit Project
              </button>
            </div>
          </section>

          <div className="project-details-grid">
            <section className="panel">
              <h2>Project Overview</h2>
              <p>{project.description}</p>
              <div className="meta-grid">
                <div>
                  <strong>Progress</strong>
                  <span>{project.progress}%</span>
                </div>
                <div>
                  <strong>Budget</strong>
                  <span>{project.budget}</span>
                </div>
                <div>
                  <strong>Due Date</strong>
                  <span>{project.dueDate}</span>
                </div>
                <div>
                  <strong>Team</strong>
                  <span>{project.team.length} members</span>
                </div>
              </div>
            </section>

            <section className="panel">
              <h2>Progress</h2>
              <div className="donut-chart">
                <div className="donut-inner">{project.progress}%</div>
              </div>
            </section>
          </div>

          <div className="project-content-grid">
            <section className="panel">
              <h2>Task List</h2>
              <ul className="task-list detail-task-list">
                {project.tasks.map((task) => (
                  <li key={task.id}>
                    <div>
                      <strong>{task.name}</strong>
                      <small>{task.assignee}</small>
                    </div>
                    <Badge
                      tone={
                        task.status === "Completed"
                          ? "success"
                          : task.status === "In Progress"
                            ? "warning"
                            : "info"
                      }
                    >
                      {task.status}
                    </Badge>
                    <Badge
                      tone={
                        task.priority === "High"
                          ? "danger"
                          : task.priority === "Medium"
                            ? "warning"
                            : "success"
                      }
                    >
                      {task.priority}
                    </Badge>
                  </li>
                ))}
              </ul>
            </section>

            <section className="panel">
              <h2>Team Members</h2>
              <ul className="member-list">
                {project.team.map((member) => (
                  <li key={member}>
                    <span className="member-avatar">
                      {member.slice(0, 2).toUpperCase()}
                    </span>
                    {member}
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
