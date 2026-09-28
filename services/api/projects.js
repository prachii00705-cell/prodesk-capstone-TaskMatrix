export const mockProjects = [
  {
    id: "1",
    name: "Website Redesign",
    status: "In Progress",
    priority: "High",
    progress: 75,
    description:
      "Redesign the company website to improve user experience and conversion rates.",
    dueDate: "May 30, 2024",
    budget: "$120,000",
    team: ["Vishal", "Rohan", "Priya", "Arjun"],
    tasks: [
      {
        id: "t1",
        name: "Create Wireframes",
        assignee: "Varun Sharma",
        status: "Completed",
        priority: "High",
        dueDate: "May 5, 2024",
      },
      {
        id: "t2",
        name: "Design Homepage",
        assignee: "Rohan Mehta",
        status: "In Progress",
        priority: "Medium",
        dueDate: "May 20, 2024",
      },
      {
        id: "t3",
        name: "Responsive Design",
        assignee: "Priya Singh",
        status: "In Progress",
        priority: "Medium",
        dueDate: "Jun 5, 2024",
      },
    ],
  },
  {
    id: "2",
    name: "Mobile App Development",
    status: "In Progress",
    priority: "Medium",
    progress: 60,
    description:
      "Build and ship the first mobile app release for internal team collaboration.",
    dueDate: "Jun 18, 2024",
    budget: "$95,000",
    team: ["Rohan", "Priya", "Arjun"],
    tasks: [
      {
        id: "t4",
        name: "User Onboarding",
        assignee: "Arjun Kapoor",
        status: "To Do",
        priority: "High",
        dueDate: "Jun 12, 2024",
      },
      {
        id: "t5",
        name: "API Integration",
        assignee: "Aisha Khan",
        status: "In Progress",
        priority: "Medium",
        dueDate: "Jun 15, 2024",
      },
    ],
  },
  {
    id: "3",
    name: "CRM System",
    status: "Completed",
    priority: "Low",
    progress: 92,
    description:
      "Finalize the customer relationship management rollout across sales operations.",
    dueDate: "Apr 15, 2024",
    budget: "$80,000",
    team: ["Varun", "Priya"],
    tasks: [
      {
        id: "t6",
        name: "Migration",
        assignee: "Varun Sharma",
        status: "Completed",
        priority: "High",
        dueDate: "Apr 12, 2024",
      },
      {
        id: "t7",
        name: "QA Review",
        assignee: "Priya Singh",
        status: "Completed",
        priority: "Low",
        dueDate: "Apr 10, 2024",
      },
    ],
  },
];

export async function getProjectById(projectId) {
  return Promise.resolve(
    mockProjects.find((project) => project.id === String(projectId)) || null,
  );
}

export async function getProjects() {
  return Promise.resolve(mockProjects);
}
