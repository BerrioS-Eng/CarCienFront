"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signout() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      // const res = (await fetch('http://localhost:8000/api/auth/signout', { method: 'POST' }));
      // const data = await res.json()
      // alert(data.message);

      window.localStorage.removeItem("userCar100");
      alert("Cierre de sesión exitoso");
      router.push("/");
    } catch (error) {
      console.error("Error durante el cierre de sesión:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">
          ¿Estás seguro de que deseas cerrar sesión?
        </h2>
        {loading && <p className="my-2">Cerrando sesión...</p>}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          disabled={loading}
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
