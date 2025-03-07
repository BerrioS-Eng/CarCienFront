'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    verifiedPassword: '',
    username: '',
    contact: ''
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { email, password, verifiedPassword, username, contact } = formData;
    if (!email.includes('@')) {
      return 'Email is not valid';
    }
    if (password.length < 6) {
      return 'Password should be at least 6 characters';
    }
    if (password !== verifiedPassword) {
      return 'Passwords do not match';
    }
    if (!username || !contact) {
      return 'Username and contact are required';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (data.success) {
        router.push('/');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Error signing up');
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Sign Up</h2>

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
          <input
            type="password"
            name="verifiedPassword"
            placeholder="Verify Password"
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Sign Up
        </button>
      </form>

    </div>
  );
}
