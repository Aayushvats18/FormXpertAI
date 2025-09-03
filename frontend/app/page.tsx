'use client';

import Link from 'next/link';
import "./globals.css";
import { Sparkles, FileText, Zap, Shield, Users, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 🔹 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x opacity-90"></div>
      <div className="absolute inset-0 backdrop-blur-[80px]"></div>

      {/* 🔹 Floating Blobs */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Navigation */}
      <nav className="px-6 py-5 relative z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center animate-pulse">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">FormXpert AI</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-200 hover:text-white transition-colors duration-200"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 px-6 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-md">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Form Creation</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Create Forms with{" "}
            <span className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-text">
              Just Your Words
            </span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12">
            An intelligent platform that transforms plain English into fully
            functional, professional forms—no coding, no drag-and-drop hassle.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/signup"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:shadow-[0_0_35px_rgba(139,92,246,0.7)] transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <span>Start Creating Free</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/login"
              className="border-2 border-white/60 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-indigo-700 transition-all duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 px-6 py-24 bg-white rounded-t-[3rem] shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Why Choose FormXpert AI?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Smarter, faster, and more professional form creation—powered by
              artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: Sparkles,
                title: "AI-Powered Generation",
                desc: "Describe your form in words, and AI builds it instantly with fields and validations.",
                color: "from-indigo-600 to-purple-600",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Generate forms in seconds instead of hours with our optimized AI engine.",
                color: "from-green-500 to-emerald-600",
              },
              {
                icon: FileText,
                title: "Smart Fields",
                desc: "Automatic field detection, validation, and input suggestions for accuracy.",
                color: "from-pink-500 to-purple-600",
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                desc: "Enterprise-grade security with encrypted data storage and safe submissions.",
                color: "from-blue-500 to-cyan-600",
              },
              {
                icon: Users,
                title: "Team Collaboration",
                desc: "Share forms, collaborate with teammates, and manage submissions together.",
                color: "from-orange-500 to-red-600",
              },
              {
                icon: ArrowRight,
                title: "Easy Integration",
                desc: "Embed anywhere, connect with tools, and export data effortlessly.",
                color: "from-teal-500 to-green-600",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${f.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <f.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 px-6 py-24">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Build Smarter Forms?
          </h2>
          <p className="text-lg text-gray-200 mb-10">
            Join thousands of professionals already creating AI-powered forms in
            seconds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/signup"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:shadow-[0_0_35px_rgba(139,92,246,0.7)] transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/login"
              className="border-2 border-white/70 text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-indigo-700 transition-all duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-14 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">FormXpert AI</span>
          </div>
          <p className="text-gray-400 mb-6">
            The future of form creation is here. Powered by artificial
            intelligence.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400 flex-wrap">
            <span>© 2026 FormXpert AI by Aayush Vats. All rights reserved.</span>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
