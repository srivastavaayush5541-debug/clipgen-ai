import SubscriptionCard from './SubscriptionCard';
import { useEffect } from 'react';

const SubscriptionPage = () => {
  useEffect(() => {
    // FORCE RESET SCROLL ON PAGE LOAD
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";

    document.body.classList.remove("overflow-hidden");
    document.documentElement.classList.remove("overflow-hidden");
  }, []);

  const plans = [
    {
      name: 'Free',
      price: '₹0',
      period: 'forever',
      features: ['2 videos per day', 'Watermarked videos', 'Basic templates'],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'Starter',
      price: '₹99',
      period: '/month',
      features: ['Unlimited videos', 'No watermark', '10 templates'],
      buttonText: 'Subscribe Now',
      popular: false
    },
    {
      name: 'Pro',
      price: '₹249',
      period: '/3 months',
      features: ['Everything in Starter', 'Priority processing', 'All templates'],
      buttonText: 'Subscribe Now',
      popular: false
    },
    {
      name: 'Growth',
      price: '₹499',
      period: '/6 months',
      features: ['Everything in Pro', 'Custom branding', 'API access'],
      buttonText: 'Subscribe Now',
      popular: false
    },
    {
      name: 'Enterprise',
      price: '₹999',
      period: '/year',
      features: ['Everything included', 'White label', 'Dedicated support'],
      buttonText: 'Get Started',
      popular: true
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Cancel anytime.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={plan.name}>
              <SubscriptionCard plan={plan} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 p-8 bg-white/50 backdrop-blur-sm rounded-2xl shadow-md">
          <p className="text-gray-500 text-lg">
            Need more? <span className="font-semibold text-blue-600 cursor-pointer hover:underline">Contact sales</span> for custom enterprise pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPage;
