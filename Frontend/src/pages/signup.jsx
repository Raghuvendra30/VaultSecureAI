import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toastShownRef = useRef(false); // ✅ Prevents double toasts

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Signup successful!');
        setTimeout(() => navigate('/login', { replace: true }), 2000);
        // Optionally redirect after delay
        // setTimeout(() => navigate('/login'), 2000);
      } else {
        toast.error(data.msg || 'Signup failed!');
      }
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-6xl flex shadow-2xl rounded-xl overflow-hidden">
        
        {/* Left Panel */}
        <div className="w-2/5 bg-gradient-to-br from-blue-600 via-purple-500 to-pink-400 text-white flex flex-col justify-center items-center p-10">
          <h1 className="text-4xl text-center font-bold mb-4">Join Our Community</h1>
          <p className="text-lg max-w-sm text-center">
            Start your journey with <span className="font-semibold text-yellow-300">VaultSecure Ai</span> and empower your organization to detect, analyze, and stop fraudulent activity before it impacts your business.
          </p>
        </div>

        {/* Right Panel */}
        <div className="w-3/5 bg-white flex justify-center items-center p-8 min-h-[480px]">
          <form onSubmit={handleSignup} className="w-full max-w-sm">
            <h2 className="text-2xl font-semibold text-center text-purple-600 mb-6">Sign Up</h2>

            {/* Name */}
            <div className="mb-4">
              <div className="flex items-center border rounded px-3 py-2">
                <span className="text-gray-400 mr-2">📝</span>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-white text-black outline-none text-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <div className="flex items-center border rounded px-3 py-2">
                <span className="text-gray-400 mr-2">📧</span>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white text-black outline-none text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <div className="flex items-center border rounded px-3 py-2">
                <span className="text-gray-400 mr-2">🔒</span>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-white text-black outline-none text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 rounded bg-gradient-to-r from-purple-500 to-pink-400 text-white font-semibold hover:opacity-90"
            >
              SIGN UP
            </button>

            <p className="text-center mt-4 text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-purple-600 hover:underline">Try logging in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
