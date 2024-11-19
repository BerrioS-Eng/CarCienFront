"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    verifiedPassword: "",
    username: "",
    contact: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { email, password, verifiedPassword, username, contact } = formData;
    if (!email.includes("@")) {
      return "El correo electrónico no es válido";
    }
    if (password.length < 6) {
      return "La contraseña debe tener al menos 6 caracteres";
    }
    if (password !== verifiedPassword) {
      return "Las contraseñas no coinciden";
    }
    if (!username || !contact) {
      return "El nombre de usuario y el contacto son obligatorios";
    }
    return null;
  };

  const translateError = (message) => {
    if (message.includes('"password" with value')) {
      return "La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula y un número.";
    }
    return message;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert("Registro exitoso");
        router.push("/signin");
      } else {
        setError(translateError(data.message));
      }
    } catch (err) {
      console.error(err);
      setError("Error al registrarse");
    }
  };

  return (
    <div className="flex flex-grow bg-gray-100 p-4 mt-16">
      <main className="flex-grow flex items-center justify-center py-5">
        <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
          {error && <p style={{ color: "red" }}>{error}</p>}
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Registro
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                name="verifiedPassword"
                placeholder="Verificar Contraseña"
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="username"
                placeholder="Nombre de usuario"
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="contact"
                placeholder="Contacto"
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Registrarse
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
