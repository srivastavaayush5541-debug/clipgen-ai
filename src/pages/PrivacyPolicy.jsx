import { useEffect } from 'react';

const PrivacyPolicy = ({ setPage }) => {
  useEffect(() => {
    document.title = 'Privacy Policy - ClipGen AI';
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
            Privacy Policy
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mt-6 mb-2">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We collect information you provide directly, such as when you create an account, generate videos, or make a purchase.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• Video topics and generated scripts</li>
              <li>• Payment information (processed by Razorpay)</li>
              <li>• Usage data and preferences</li>
              <li>• Contact information for support</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We use your information to provide and improve our AI video generation service.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• Generate personalized video scripts and audio</li>
              <li>• Process payments through secure gateways</li>
              <li>• Improve AI models and service quality</li>
              <li>• Communicate important updates</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Data Sharing and Security</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We never sell your data. We share only with trusted service providers.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• Razorpay for payments (encrypted)</li>
              <li>• Cloud services for AI processing</li>
              <li>• Legal compliance when required</li>
            </ul>
            <p className="text-lg text-gray-700 mt-6">
              All data is encrypted and stored securely with regular security audits.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Your Rights</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              You have control over your data:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• Access your data anytime</li>
              <li>• Request deletion of your account</li>
              <li>• Download your usage history</li>
              <li>• Opt-out of communications</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Cookies and Tracking</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We use essential cookies for functionality and analytics cookies for improvement.
              You can manage preferences in browser settings.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Changes to This Policy</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We may update this policy. Significant changes will be notified via email or app notification.
            </p>
          </section>

          <section className="text-center">
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

export default PrivacyPolicy;

