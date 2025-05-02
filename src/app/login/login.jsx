"use client";

// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
const Login = () => {
const [loading, setLoading] = useState(true);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);
const [isGoogleLoading, setIsGoogleLoading] = useState(false);

const handleGoogleAuth = async () => {
  try {
    setIsGoogleLoading(true);
    const googleAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
    const params = {
      client_id: 'your-client-id',
      redirect_uri: `${window.location.origin}/auth/google/callback`,
      response_type: 'code',
      scope: 'email profile',
      access_type: 'offline',
      prompt: 'consent',
    };
    const queryString = new URLSearchParams(params).toString();
    window.location.href = `${googleAuthUrl}?${queryString}`;
  } catch (error) {
    console.error('Google auth error:', error);
    setIsGoogleLoading(false);
  }
};
useEffect(() => {
const timer = setTimeout(() => {
setLoading(false);
}, 2500);
return () => clearTimeout(timer);
}, []);
return (
<div className="min-h-screen w-full">
{loading ? (
<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 to-purple-300 relative overflow-hidden">
<div className="relative z-10 flex flex-col items-center">
<div className="text-6xl font-bold text-white mb-4 animate-scale">
<i className="fas fa-graduation-cap mr-3"></i>
EduLearn
</div>
<h2 className="text-xl text-white font-light mb-8 animate-fade">Your Classroom, Reimagined</h2>
<div className="flex space-x-2 mt-4">
<div className="w-3 h-3 rounded-full bg-white opacity-70 animate-bounce"></div>
<div className="w-3 h-3 rounded-full bg-white opacity-70 animate-bounce delay-100"></div>
<div className="w-3 h-3 rounded-full bg-white opacity-70 animate-bounce delay-200"></div>
</div>
</div>
<div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-400 opacity-20 animate-float"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500 opacity-20 animate-float-delayed"></div>
<div className="absolute top-3/4 left-1/3 w-48 h-48 rounded-full bg-purple-300 opacity-20 animate-float"></div>
</div>
) : (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-800 relative overflow-hidden p-6">
<div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=Modern%20educational%20environment%20with%20floating%20books%2C%20digital%20screens%2C%20mathematical%20formulas%2C%20and%20glowing%20geometric%20shapes%2C%20soft%20purple%20and%20blue%20gradient%20lighting%2C%20creating%20an%20inspiring%20academic%20atmosphere%20with%20subtle%20depth%20and%20dimension&width=1920&height=1080&seq=5&orientation=landscape')] bg-cover bg-center opacity-70"></div>
<div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>
<div className="w-full max-w-md backdrop-blur-xl bg-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-8 relative z-10 border border-white/20 hover:shadow-[0_8px_40px_rgba(139,92,246,0.3)] transition-all duration-300">
<div className="flex justify-center mb-8">
<div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-200 flex items-center">
<i className="fas fa-graduation-cap mr-3 text-purple-300"></i>
EduLearn
</div>
</div>
<h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-2 text-center">Welcome Back</h1>
<p className="text-white/70 text-center mb-8">Sign in to continue your learning journey</p>
<form className="space-y-6">
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
className="block w-full pl-10 pr-3 py-3 rounded-lg bg-white/15 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-lg shadow-inner transform transition-all duration-300 hover:bg-white/20 focus:bg-white/25"
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
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="fas fa-lock text-purple-300"></i>
</div>
<input
id="password"
name="password"
type={showPassword ? "text" : "password"}
autoComplete="current-password"
required
value={password}
onChange={(e) => setPassword(e.target.value)}
className="block w-full pl-10 pr-10 py-3 rounded-lg bg-white/15 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-lg shadow-inner transform transition-all duration-300 hover:bg-white/20 focus:bg-white/25"
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
className="w-full flex justify-center py-3.5 px-4 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 !rounded-button whitespace-nowrap cursor-pointer shadow-lg"
>
Sign in
</button>
</form>
<div className="mt-6">
<div className="relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-white/20"></div>
</div>
<div className="relative flex justify-center text-sm">
<span className="px-2 bg-white/10 text-white backdrop-blur-sm rounded">or continue with</span>
</div>
</div>
<div className="mt-6 grid grid-cols-2 gap-3">
<button
id="googleAuthBtn"
type="button"
onClick={handleGoogleAuth}
disabled={isGoogleLoading}
className={`w-full inline-flex justify-center py-2.5 px-4 rounded-lg bg-white/10 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-purple-400 border border-white/20 backdrop-blur-lg !rounded-button whitespace-nowrap cursor-pointer shadow-lg transition-all duration-300 ${isGoogleLoading ? 'opacity-75' : 'hover:bg-white/20'}`}
>
{isGoogleLoading ? (
  <>
    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
    Connecting...
  </>
) : (
  <>
    <i className="fab fa-google text-xl text-white mr-2"></i>
    Google
  </>
)}
</button>
<button
type="button"
className="w-full inline-flex justify-center py-2.5 px-4 rounded-lg bg-white/10 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-purple-400 border border-white/20 backdrop-blur-lg !rounded-button whitespace-nowrap cursor-pointer shadow-lg"
>
<i className="fab fa-microsoft text-xl text-white mr-2"></i>
Microsoft
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
@keyframes scale {
0% { transform: scale(0.8); opacity: 0; }
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
@keyframes float-delayed {
0% { transform: translateY(0px); }
50% { transform: translateY(-15px); }
100% { transform: translateY(0px); }
}
.animate-scale {
animation: scale 1s ease-out forwards;
}
.animate-fade {
animation: fade 1.5s ease-out forwards;
}
.animate-float {
animation: float 6s ease-in-out infinite;
}
.animate-float-delayed {
animation: float-delayed 8s ease-in-out infinite;
}
.delay-100 {
animation-delay: 0.1s;
}
.delay-200 {
animation-delay: 0.2s;
}
`}</style>
</div>
);
};
export default Login
