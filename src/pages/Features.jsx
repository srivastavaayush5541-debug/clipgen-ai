import React from 'react';
import { FaRocket, FaBolt, FaMagic, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const Features = () => {

  const features = [
    {
      icon: FaRocket,
      title: "Instant Video Generation",
      description: "Enter any topic and get professional video script + voiceover in seconds",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50"
    },
    {
      icon: FaBolt,
      title: "Lightning Fast",
      description: "Generate content in under 3 seconds for social media and marketing",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50"
    },
    {
      icon: FaMagic,
      title: "AI Powered Quality",
      description: "Advanced AI creates engaging professional content that converts viewers",
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: FaShieldAlt,
      title: "100% Original Content",
      description: "Uniquely generated scripts - never worry about duplication or plagiarism",
      color: "text-cyan-500",
      bgColor: "bg-cyan-50"
    },
    {
      icon: FaChartLine,
      title: "Proven Results", 
      description: "Boost engagement 3x with AI optimized content for maximum retention",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: FaPlay,
      title: "Ready to Use",
      description: "Download script and audio files ready for immediate video production",
      color: "text-pink-500",
      bgColor: "bg-pink-50"
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent mb-6">
            Our Features
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to create professional AI videos without the complexity
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-indigo-200 cursor-pointer"
              >
                <div className={`w-20 h-20 ${feature.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-6 shadow-lg`}>
                  <Icon className={`w-12 h-12 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;

