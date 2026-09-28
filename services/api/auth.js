const mockUser = {
  id: "u-001",
  name: "Aarav Sharma",
  email: "aarav@taskmatrix.io",
  role: "Project Manager",
};

export async function login({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!email || !password) {
        reject(new Error("Email and password are required."));
        return;
      }

      if (!email.includes("@")) {
        reject(new Error("Enter a valid email address."));
        return;
      }

      resolve({ user: { ...mockUser, email }, token: "mock-token" });
    }, 250);
  });
}

export async function register({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!email || !password) {
        reject(new Error("All fields are required."));
        return;
      }

      resolve({ user: { ...mockUser, email }, token: "mock-token" });
    }, 250);
  });
}

export function getStoredSession() {
  if (typeof window === "undefined") return null;
  const session = window.localStorage.getItem("taskmatrix-session");
  return session ? JSON.parse(session) : null;
}

export function persistSession(session) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem("taskmatrix-session", JSON.stringify(session));
}

export function clearSession() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem("taskmatrix-session");
}
