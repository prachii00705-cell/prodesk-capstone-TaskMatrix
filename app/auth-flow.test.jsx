import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import LoginPage from "@/app/login/page";
import RegisterPage from "@/app/register/page";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import authReducer, { logout } from "@/store/slices/authSlice";
import { store } from "@/store/store";

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: jest.fn(), replace: jest.fn() }),
  usePathname: () => "/dashboard",
}));

function renderWithStore(ui, customStore = store) {
  return render(<Provider store={customStore}>{ui}</Provider>);
}

describe("TaskMatrix auth flow", () => {
  it("renders the login page", () => {
    renderWithStore(<LoginPage />);
    expect(
      screen.getByRole("heading", { name: /welcome back/i }),
    ).toBeInTheDocument();
  });

  it("renders the registration page", () => {
    renderWithStore(<RegisterPage />);
    expect(
      screen.getByRole("heading", { name: /create account/i }),
    ).toBeInTheDocument();
  });

  it("redirects unauthenticated users away from protected content", () => {
    const replace = jest.fn();
    jest
      .spyOn(require("next/navigation"), "useRouter")
      .mockReturnValue({ replace, push: jest.fn() });

    renderWithStore(
      <ProtectedRoute>
        <div>Secret</div>
      </ProtectedRoute>,
      {
        ...store,
        getState: () => ({ auth: { isAuthenticated: false } }),
        dispatch: jest.fn(),
      },
    );

    expect(replace).toHaveBeenCalledWith("/login");
  });

  it("logout clears auth state", () => {
    const state = authReducer(
      {
        user: { name: "Aarav" },
        isAuthenticated: true,
        status: "succeeded",
        error: null,
      },
      logout(),
    );
    expect(state.isAuthenticated).toBe(false);
    expect(state.user).toBeNull();
  });
});
