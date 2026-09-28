export const mockTasks = [
  {
    id: "task-1",
    title: "Create Wireframes",
    project: "Website Redesign",
    assignee: "Varun Sharma",
    status: "Completed",
    priority: "High",
  },
  {
    id: "task-2",
    title: "Design Homepage",
    project: "Website Redesign",
    assignee: "Rohan Mehta",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: "task-3",
    title: "Responsive Design",
    project: "Website Redesign",
    assignee: "Priya Singh",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: "task-4",
    title: "User Onboarding",
    project: "Mobile App Development",
    assignee: "Arjun Kapoor",
    status: "To Do",
    priority: "High",
  },
  {
    id: "task-5",
    title: "API Integration",
    project: "Mobile App Development",
    assignee: "Aisha Khan",
    status: "In Progress",
    priority: "Medium",
  },
];

export async function getTasks() {
  return Promise.resolve(mockTasks);
}
