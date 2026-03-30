const SubscriptionCard = ({ plan }) => {
  const isPopular = plan.popular;
  
  return (
    <div className={`relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border ${isPopular ? 'border-blue-500 ring-4 ring-blue-100' : 'border-gray-200'}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
          BEST VALUE
        </div>
      )}
      
      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{plan.name}</h3>
      
      <div className="text-4xl font-bold text-gray-900 mb-2">{plan.price}</div>
      <div className="text-gray-500 mb-8">{plan.period}</div>
      
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      

      <button className="w-full bg-gradient-to-r from-primary-600 to-secondary-500 hover:from-primary-600 hover:to-purple-600 text-white py-4 px-6 font-semibold text-lg rounded-2xl shadow-lg hover:shadow-premium transition-all duration-300 hover:scale-105">
        {plan.buttonText}
      </button>

    </div>
  );
};

export default SubscriptionCard;

