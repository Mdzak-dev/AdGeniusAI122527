import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-purple-400">
          Welcome to AdGenius AI
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-300">
          Your Smart Partner for Performance-Driven Ad Campaigns
        </p>
        <button className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl text-lg">
          Join Beta Access
        </button>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-300">
          Phase 1 Core Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Goal-based Campaign Wizard",
            "Paste Post URL to Boost Ads",
            "Local Language Voice Ad Setup",
            "Smart Caption & Hashtag Generator",
            "Trending Festival Ad Templates",
            "Auto A/B Testing for ROI",
            "Smart Budget ROI Predictor",
            "One-Click Multi-Platform Publishing",
            "Emotional Tone Targeting",
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 hover:shadow-lg border border-purple-600"
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-400">
                ✅ {feature}
              </h3>
              <p className="text-sm text-gray-400">
                Powerful automation to enhance user results and reduce setup time.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-purple-800 py-12 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold">
          Built for Small & Big Businesses Alike
        </h2>
        <p className="mt-2 mb-4">Simple. Powerful. Made in Bharat 🇮🇳</p>
        <button className="bg-white text-purple-800 px-6 py-3 font-semibold rounded-lg hover:bg-gray-200">
          Get Early Access
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        <p>© 2025 AdGenius AI. All rights reserved.</p>
        <p className="mt-1">Vision of MD: To empower every business to grow faster through smarter ads.</p>
      </footer>
    </div>
  );
}
