import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Login successful!');
        setTimeout(() => navigate('/dashboard', { replace: true }), 2000); // ✅ Redirect to Dashboard
      } else {
        toast.error(data.msg || 'Login failed!');
      }
    } catch (error) {
      toast.error('Something went wrong!');
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-yellow-100">
      <div className="w-full max-w-6xl flex shadow-2xl rounded-xl overflow-hidden">
        
        {/* Left Panel */}
        <div className="w-2/5 bg-gradient-to-br from-blue-600 via-purple-500 to-pink-400 text-white flex flex-col justify-center items-center p-10">
          <h1 className="text-4xl text-center font-bold mb-4">Welcome Back</h1>
          <p className="text-lg max-w-sm text-center">
            Sign in to <span className="font-semibold text-yellow-300">VaultSecure Ai</span> and continue protecting your business with real-time fraud detection and actionable insights.
          </p>
        </div>

        {/* Right Panel */}
        <div className="w-3/5 bg-white flex justify-center items-center p-8 min-h-[480px]">
          <form onSubmit={handleLogin} className="w-full max-w-sm">
            <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">Login</h2>

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
              className="w-full py-2 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90"
            >
              LOGIN
            </button>

            <p className="text-center mt-4 text-sm text-gray-600">
              Don’t have an account?{' '}
              <Link to="/signup" className="text-blue-600 hover:underline">Create one</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
