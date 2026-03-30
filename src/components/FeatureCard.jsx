const FeatureCard = ({ icon, title, description }) => {

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-primary/50">
      <div className="text-3xl mb-4 text-center">

        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
        {title}
      </h3>
      <p className="text-gray-500 text-center">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;

