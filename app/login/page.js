"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { login } from "@/services/api/auth";
import { loginSuccess } from "@/store/slices/authSlice";
import { persistSession } from "@/services/api/auth";

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await login({ email, password });
      const user = response.user;
      persistSession({ user, token: response.token });
      dispatch(loginSuccess(user));
      router.push("/dashboard");
    } catch (caughtError) {
      setError(caughtError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-shell">
        <section className="auth-panel auth-intro">
          <div className="brand-block">TaskMatrix</div>
          <h1>TaskMatrix</h1>
          <p>Enterprise Agile Project Management System</p>
          <div className="feature-list">
            <div>
              <span>✓</span> Organize
            </div>
            <div>
              <span>✓</span> Collaborate
            </div>
            <div>
              <span>✓</span> Track Progress
            </div>
            <div>
              <span>✓</span> Build. Plan. Achieve Together.
            </div>
          </div>
        </section>

        <section className="auth-panel auth-form-panel" aria-label="Login form">
          <h2>Welcome back</h2>
          <p className="subtitle">Sign in to continue to TaskMatrix</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <Input
              id="email"
              label="Email address"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              aria-label="Email address"
            />

            <Input
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              aria-label="Password"
            />

            <div className="auth-actions">
              <button
                type="button"
                className="text-button"
                aria-label="Forgot password"
              >
                Forgot password?
              </button>
            </div>

            {error ? (
              <div className="error-banner" role="alert">
                {error}
              </div>
            ) : null}

            <Button type="submit" fullWidth disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <div className="oauth-row">
            <button type="button" aria-label="Continue with Google">
              Continue with Google
            </button>
            <button type="button" aria-label="Continue with Apple">
              Continue with Apple
            </button>
          </div>

          <p className="signup-link">
            Don&apos;t have an account? <Link href="/register">Sign up</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
