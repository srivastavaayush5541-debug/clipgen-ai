const FeaturesSection = () => {
  const features = [
    {
      emoji: '🎬',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-500',
      title: 'AI Video Generator',
      description: 'Generate high-quality videos instantly from your ideas and prompts with perfect aspect ratios'
    },
    {
      emoji: '⚡',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-500',
      title: 'Fast Processing', 
      description: 'Lightning fast generation - ready to post content in under 10 seconds with one click'
    },
    {
      emoji: '🎨',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-500',
      title: 'Custom Styles',
      description: 'Choose from 50+ professional templates and visual styles for every brand'
    },
    {
      emoji: '📱',
      bgColor: 'bg-green-100',
      textColor: 'text-green-500',
      title: 'Mobile Friendly',
      description: 'Perfect aspect ratios for TikTok, Reels, Shorts and Stories - optimized automatically'
    },
    {
      emoji: '🔊',
      bgColor: 'bg-pink-100',
      textColor: 'text-pink-500',
      title: 'Auto Voiceover',
      description: 'Natural AI voices in 20+ languages with perfect pronunciation and emotional tone control'
    },
    {
      emoji: '📊',
      bgColor: 'bg-indigo-100',
      textColor: 'text-indigo-500',
      title: 'Analytics Dashboard',
      description: 'Track performance, engagement metrics and optimize your content strategy with insights'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Powerful Features 🚀
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to create viral AI videos that convert
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group border border-gray-100 hover:border-gray-200"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-xl mb-6 ${feature.bgColor} group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                <span className={`text-xl ${feature.textColor}`}>{feature.emoji}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center group-hover:text-gray-800 transition-colors leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm text-center leading-relaxed group-hover:text-gray-700 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

