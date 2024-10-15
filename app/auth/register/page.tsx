"use client";
import React, { useState } from "react";

interface RegisterFormProps {
  email: string;
  password: string;
  mobile: number;
}

const RegisterPage = () => {
  const [email, setEmail] = useState<RegisterFormProps["email"]>("");
  const [password, setPassword] = useState<RegisterFormProps["password"]>("");
  const [mobile, setMobile] = useState<RegisterFormProps["mobile"]>();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          mobile: mobile,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        window.location.href = "/";
        alert(data.message);
      } else {
        const error = await response.json();
        setError(error.message);
      }
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "Unknown error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 border border-solid border-black rounded-lg"
    >
      <label className="flex flex-col gap-1">
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="p-2 border border-solid border-black rounded-lg text-black"
        />
      </label>
      <label className="flex flex-col gap-1">
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          className="p-2 border border-solid border-black rounded-lg text-black"
        />
      </label>
      <label className="flex flex-col gap-1">
        Mobile Number:
        <input
          type="number"
          value={mobile}
          onChange={(event) => setMobile(parseInt(event.target.value, 10))}
          required
          className="p-2 border border-solid border-black rounded-lg text-black"
        />
      </label>
      {error && <div className="text-red-500">{error}</div>}
      <button
        type="submit"
        className="bg-black text-white p-2 rounded-lg hover:bg-gray-700"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterPage;
