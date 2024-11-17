"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth.context";

export default function Signin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  let { setUser } = useAuth();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert(data.message);

        let user = { name: data.name, token: data.token };

        setUser(user);

        window.localStorage.setItem("userCar100", JSON.stringify(user));

        router.push("/"); // Redirigir al dashboard u otra página
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Error signing in");
    }
  };

  return (
    <div className="flex flex-grow bg-gray-100 p-4 mt-16">
      <main className="flex-grow flex items-center justify-center py-5">
        <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
          {error && <p style={{ color: "red" }}>{error}</p>}
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Ingresar
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
