# TaskMatrix

## Enterprise Agile Project Management System

TaskMatrix is a commercial-grade Agile project management application designed to help development teams plan projects, organize tasks, track progress, manage team members, and monitor project activity from a centralized dashboard.

The project is being developed as a 4-week Prodesk Capstone project.

---

## Project Information

| Item | Details |
|---|---|
| Project Name | TaskMatrix |
| Project Type | Enterprise Agile Project Management System |
| Designated Track | Frontend Specialist |
| Repository | `prodesk-capstone-TaskMatrix` |
| Development Duration | 4 Weeks |

---

## Problem Statement

Development teams often rely on multiple disconnected tools to manage projects, tasks, team members, deadlines, and progress.

TaskMatrix aims to provide a centralized workspace where teams can manage their Agile workflow through projects, tasks, dashboards, filters, and team collaboration features.

---

## Target Users

### Project Managers
- Create and manage projects
- Monitor project progress
- Assign tasks to team members
- Track deadlines

### Developers
- View assigned tasks
- Update task status
- Manage priorities
- Track their workload

### Team Members
- View project activity
- Collaborate through task information
- Monitor assigned work

---

# Core Features

Features are prioritized according to the capstone requirements.

## P0 — Mandatory MVP

### Authentication
- User registration
- User login
- Logout
- Protected application routes

### Dashboard
- Project overview
- Task statistics
- Progress indicators
- Recent activity

### Project Management
- Create projects
- View projects
- View project details
- Project status

### Task Management
- Create tasks
- View tasks
- Edit tasks
- Delete tasks
- Assign tasks
- Task status management
- Task priority management

### Global State Management
Redux Toolkit will manage application-wide state including:

- Authentication state
- Project state
- Task state
- Filter state
- UI/theme state

---

## P1 — Priority Features

### Task Filtering
Users will be able to filter tasks by:

- Status
- Priority
- Assignee
- Project
- Due date

### Search
- Search projects
- Search tasks
- Search team members

### Team Management
- View team members
- Assign members to projects
- View member workload

### Project Details
- Project information
- Project task list
- Project progress
- Assigned team members
- Project activity

### Responsive Interface
The application will support:

- Desktop
- Tablet
- Mobile

---

## P2 — Advanced Features

### Agile Board

A Kanban-style board containing:

- Backlog
- To Do
- In Progress
- Review
- Done

### Drag and Drop

Tasks can be moved between workflow columns.

### Notifications

Users can receive notifications for:

- Task assignments
- Status changes
- Approaching deadlines
- Project updates

### Analytics

Project managers can view:

- Task completion rate
- Project progress
- Team workload
- Completed vs pending tasks

### Dark / Light Theme

A global theme manager will provide:

- Light mode
- Dark mode
- Persistent theme preference

---

# Technology Stack

## Frontend

- Next.js
- React
- JavaScript
- HTML5
- CSS3

## State Management

- Redux Toolkit
- React Redux

## Testing

- Jest
- React Testing Library
- Testing Library User Event

## Component Development

- Storybook

## Backend

Planned backend integration:

- Node.js
- Express.js

## Database

Planned database:

- MongoDB
- Mongoose

## Authentication

Planned authentication architecture:

- JWT
- Secure password hashing

## Development Tools

- Visual Studio Code
- Git
- GitHub
- Figma
- Draw.io

---

# UI/UX Design

The interface will follow a modern enterprise dashboard design.

The initial Figma design will include at least three core viewports:

1. Authentication Screen
2. Main Dashboard
3. Project / Task Details View

Additional planned screens include:

- Project List
- Task Management
- Team Management
- User Profile
- Settings

### Figma Design

_Figma link will be added after the UI/UX wireframes are completed._

---

# Planned Application Architecture

```text
                    TaskMatrix
                        |
                        v
                Next.js Application
                        |
        +---------------+---------------+
        |                               |
        v                               v
   UI Components                    Redux Toolkit
        |                               |
        +---------------+---------------+
                        |
                        v
                    API Layer
                        |
                        v
                  Express.js API
                        |
                        v
                    MongoDB