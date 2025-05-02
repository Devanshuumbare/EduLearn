"use client";

import React, { useState, useEffect } from 'react';

const Login = () => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleGoogleAuth = async () => {
    try {
      setIsGoogleLoading(true);

      // Using Firebase Google Auth (this is a placeholder - actual implementation would use Firebase SDK)
      // In a real implementation, you would use the Firebase SDK's signInWithPopup or similar
      console.log('Authenticating with Google...');

      // Simulate authentication process
      setTimeout(() => {
        // Set authentication state in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify({
          name: 'Deva',
          email: 'deva@example.com',
          role: 'Student'
        }));

        // Redirect to dashboard after successful auth
        window.location.href = '/dashboard';
        setIsGoogleLoading(false);
      }, 1500);

    } catch (error) {
      console.error('Google auth error:', error);
      setIsGoogleLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    // Show submitting state
    setIsSubmitting(true);

    // Simulate authentication process
    setTimeout(() => {
      // In a real app, you would validate credentials with a backend
      // For demo purposes, we'll just set a flag in localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify({
        name: 'Deva',
        email: email,
        role: 'Student'
      }));

      // Redirect to dashboard
      window.location.href = '/dashboard';
    }, 1500);
  };

  useEffect(() => {
    // Check if user is already logged in
    if (typeof window !== 'undefined') {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (isLoggedIn) {
        // Redirect to dashboard if already logged in
        window.location.href = '/dashboard';
        return;
      }
    }

    // Longer loading time to show splash screen animations
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full">
      {loading ? (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 to-purple-300 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>

          {/* Animated floating elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-400 opacity-20 animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500 opacity-20 animate-float delay-100"></div>
          <div className="absolute top-3/4 left-1/3 w-48 h-48 rounded-full bg-purple-300 opacity-20 animate-float delay-200"></div>

          {/* Animated icons */}
          <div className="absolute top-1/5 left-1/5 text-white text-5xl opacity-30 animate-float delay-100">
            <i className="fas fa-book transform rotate-12"></i>
          </div>
          <div className="absolute bottom-1/4 right-1/5 text-white text-4xl opacity-30 animate-float delay-200">
            <i className="fas fa-globe transform -rotate-12"></i>
          </div>
          <div className="absolute top-2/3 right-1/3 text-white text-3xl opacity-30 animate-float delay-300">
            <i className="fas fa-pencil-alt transform rotate-45"></i>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="text-6xl font-bold text-white mb-4 animate-scale">
              <i className="fas fa-graduation-cap mr-3"></i>
              EduLearn
            </div>
            <h2 className="text-xl text-white font-light mb-8 animate-fade delay-100">Your Classroom, Reimagined</h2>
            <div className="flex space-x-2 mt-4">
              <div className="w-3 h-3 rounded-full bg-white opacity-70 animate-pulse"></div>
              <div className="w-3 h-3 rounded-full bg-white opacity-70 animate-pulse delay-100"></div>
              <div className="w-3 h-3 rounded-full bg-white opacity-70 animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-800 relative overflow-hidden p-6">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2787&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>

          <div className="w-full max-w-md backdrop-blur-xl bg-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-8 relative z-10 border border-white/20 hover:shadow-[0_8px_40px_rgba(139,92,246,0.3)] transition-all duration-300">
            <div className="flex justify-center mb-8">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200 flex items-center">
                <i className="fas fa-graduation-cap mr-3 text-purple-300"></i>
                EduLearn
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-2 text-center">Welcome Back</h1>
            <p className="text-white/70 text-center mb-8">Sign in to continue your learning journey</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-500/20 border border-red-500/50 text-white px-4 py-2 rounded-lg text-sm">
                  {error}
                </div>
              )}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-envelope text-purple-300"></i>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 rounded-lg bg-white/15 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-lg shadow-inner hover:bg-white/20 focus:bg-white/25"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                  <a href="#" className="text-sm font-medium text-white/90 hover:text-white whitespace-nowrap">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full px-4 py-3 rounded-lg bg-white/15 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-lg shadow-inner hover:bg-white/20 focus:bg-white/25"
                    placeholder="Enter your password"
                  />
                  <div
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-white/70`}></i>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3.5 px-4 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 rounded-lg whitespace-nowrap cursor-pointer shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Signing in...
                  </>
                ) : (
                  'Sign in'
                )}
              </button>
            </form>
            <div className="mt-6">
              <div className="text-center mb-4">
                <span className="text-sm text-white/70">or continue with</span>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <button
                  id="googleAuthBtn"
                  type="button"
                  onClick={handleGoogleAuth}
                  disabled={isGoogleLoading}
                  className={`w-full inline-flex justify-center py-2.5 px-4 rounded-lg bg-white/10 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-purple-400 border border-white/20 backdrop-blur-lg rounded-lg whitespace-nowrap cursor-pointer shadow-lg transition-all duration-300 ${isGoogleLoading ? 'opacity-75' : 'hover:bg-white/20'}`}
                >
                  {isGoogleLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Connecting...
                    </>
                  ) : (
                    <>
                      <i className="fab fa-google text-xl text-white mr-2"></i>
                      Sign in with Google
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-white/80">
                Don't have an account?{' '}
                <a href="#" className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200 hover:from-purple-200 hover:to-pink-300 transition-all duration-300">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        /* Animations for splash screen only */
        @keyframes scale {
          0% { transform: scale(0.7); opacity: 0; }
          70% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.7; }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-scale {
          animation: scale 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-fade {
          animation: fade 1.5s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
};

export default Login;
