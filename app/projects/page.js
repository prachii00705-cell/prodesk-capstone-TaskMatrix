"use client";

import Link from "next/link";
import AppLayout from "@/components/layout/AppLayout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useSelector } from "react-redux";
import { mockProjects } from "@/services/api/projects";

export default function ProjectsPage() {
  const projects = useSelector((state) =>
    state.projects.items.length ? state.projects.items : mockProjects,
  );

  return (
    <ProtectedRoute>
      <AppLayout>
        <div className="page-stack">
          <div className="section-header">
            <div>
              <p className="eyebrow">Portfolio</p>
              <h1>Projects</h1>
            </div>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <Link
                href={`/projects/${project.id}`}
                key={project.id}
                className="project-card"
              >
                <div className="project-card-header">
                  <span className="project-tag">{project.status}</span>
                  <span className="priority-pill priority-pill-high">
                    {project.priority}
                  </span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-card-meta">
                  <span>{project.progress}% complete</span>
                  <span>{project.dueDate}</span>
                </div>
                <div className="mini-progress">
                  <span style={{ width: `${project.progress}%` }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </AppLayout>
    </ProtectedRoute>
  );
}
