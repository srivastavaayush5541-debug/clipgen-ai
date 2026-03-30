import { motion } from 'framer-motion'

const SubscriptionPage = () => {
  const plans = [
    {
      name: 'FREE PLAN',
      price: '₹0/month',
      features: [
        '2 videos/day',
        'Ads included',
        'Basic features'
      ],
      buttonText: 'Get Started',
      popular: false
    },
    {
      name: 'PLAN 1',
      price: '₹99/month',
      features: [
        'Unlimited videos',
        'No ads',
        'Fast processing'
      ],
      buttonText: 'Subscribe Now',
      popular: false
    },
    {
      name: 'PLAN 2',
      price: '₹249 / 3 months',
      features: [
        'Unlimited videos',
        'No ads',
        'Priority support'
      ],
      buttonText: 'Subscribe Now',
      popular: false
    },
    {
      name: 'PLAN 3',
      price: '₹499 / 6 months',
      features: [
        'Everything in Plan 2',
        'Advanced editing',
        '24/7 support'
      ],
      buttonText: 'Subscribe Now',
      popular: false
    },
    {
      name: 'PLAN 5',
      price: '₹999 / 12 months',
      features: [
        'Everything included',
        'Best value',
        'Premium support'
      ],
      buttonText: 'Subscribe Now',
      popular: true
    }
  ];

  return (
    <motion.main
      className="subscription-page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="subscription-header">
        <h1>Choose Your Plan</h1>
        <p>Pick the perfect plan for your video creation needs</p>
      </div>

      <div className="plans-container">
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`plan-card ${plan.popular ? 'popular' : ''}`}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {plan.popular && (
                <div className="popular-badge">BEST VALUE</div>
              )}
              <h2>{plan.name}</h2>
              <div className="plan-price">{plan.price}</div>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <motion.button
                className="subscribe-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="subscription-footer">
        <p>Cancel anytime. Secure payment.</p>
      </div>
    </motion.main>
  );
};

export default SubscriptionPage;

