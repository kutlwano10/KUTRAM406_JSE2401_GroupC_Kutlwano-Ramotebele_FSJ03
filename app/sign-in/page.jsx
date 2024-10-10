"use client"
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebaseConfig';
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null); // State for error message
  const router = useRouter();
  const [signInWithEmailAndPassword, loading, error] = useSignInWithEmailAndPassword(auth);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await signInWithEmailAndPassword(email, password);

      if (res?.user) {
        // Successfully signed in
        console.log("User signed in:", res.user);
        sessionStorage.setItem("user", JSON.stringify(res.user)); // Store user info
        setEmail('');
        setPassword('');
        router.push('/'); // Redirect to home
      }
    } catch (error) {
      // Set error message
      setErrorMessage(error.message);
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6  w-full max-w-sm"
      >
        <h2 className="text-xl font-semibold mb-4 text-center">Sign In</h2>

        {/* Display error message if any */}
        {errorMessage && (
          <div className="mb-4 text-red-500 text-sm">
            {errorMessage}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
};

export default SignIn;

