import { useEffect } from 'react';

const Terms = ({ setPage }) => {
  useEffect(() => {
    document.title = 'Terms & Conditions - ClipGen AI';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
<button
          onClick={() => setPage("home")}
          className="mb-6 text-blue-500 hover:underline"
        >
          ← Back to Home
        </button>
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Terms & Conditions
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              By accessing and using ClipGen AI, you accept and agree to be bound by these Terms & Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">2. Service Description</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              ClipGen AI provides AI-powered video script generation and voiceover services through a web interface.
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>• Script generation based on user prompts</li>
              <li>• Voiceover audio creation</li>
              <li>• Freemium model with premium subscriptions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">3. User Accounts</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              You may need to create an account to access certain features. You are responsible for maintaining account security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">4. Subscription and Payments</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              All payments processed through Razorpay. No refunds except as required by law.
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>• Free tier: 2 videos/day</li>
              <li>• Premium: Unlimited access</li>
              <li>• Subscriptions auto-renew</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">5. Content Ownership</h2>
            <p className="text-gray-700 leading-relaxed">
              You own generated content. We retain rights to improve our AI models.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">6. Prohibited Use</h2>
            <p className="text-gray-700 leading-relaxed">
              Do not use for illegal activities, spam, or harmful content.
            </p>
          </section>

          <section className="text-center pt-12 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              Questions? Contact us at support@clipgen.ai
            </p>
            <p className="text-xs text-gray-400">
              © 2024 ClipGen AI. All rights reserved.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;

