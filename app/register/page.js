"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { register, persistSession } from "@/services/api/auth";
import { loginSuccess } from "@/store/slices/authSlice";

export default function RegisterPage() {
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
      const response = await register({ email, password });
      persistSession({ user: response.user, token: response.token });
      dispatch(loginSuccess(response.user));
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
              <span>✓</span> Collaborate
            </div>
            <div>
              <span>✓</span> Track tasks
            </div>
            <div>
              <span>✓</span> Ship faster
            </div>
          </div>
        </section>

        <section
          className="auth-panel auth-form-panel"
          aria-label="Registration form"
        >
          <h2>Create account</h2>
          <p className="subtitle">Get started with TaskMatrix</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <Input
              id="reg-email"
              label="Email address"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
            />
            <Input
              id="reg-password"
              label="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Create a password"
            />
            {error ? (
              <div className="error-banner" role="alert">
                {error}
              </div>
            ) : null}
            <Button type="submit" fullWidth disabled={loading}>
              {loading ? "Creating account..." : "Create account"}
            </Button>
          </form>

          <p className="signup-link">
            Already have an account? <Link href="/login">Sign in</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
