export const mockTeamMembers = [
  { id: "m1", name: "Varun Sharma", role: "Project Manager" },
  { id: "m2", name: "Rohan Mehta", role: "UI/UX Designer" },
  { id: "m3", name: "Priya Singh", role: "Frontend Developer" },
  { id: "m4", name: "Arjun Kapoor", role: "Backend Engineer" },
  { id: "m5", name: "Neha Vora", role: "Product Designer" },
];

export async function getTeamMembers() {
  return Promise.resolve(mockTeamMembers);
}
