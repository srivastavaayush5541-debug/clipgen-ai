import React from 'react';
import { FaPen, FaMagic, FaPlayCircle, FaDownload } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Write Your Topic",
      description: "Enter any topic or idea. Our AI instantly understands your requirements and prepares to create perfect video content.",
      icon: FaPen,
      color: "text-indigo-500",
      bgColor: "bg-indigo-50"
    },
    {
      number: "02",
      title: "AI Magic Happens",
      description: "Advanced AI algorithms generate professional script, voiceover text, and engaging content structure in seconds.",
      icon: FaMagic,
      color: "text-emerald-500",
      bgColor: "bg-emerald-50"
    },
    {
      number: "03",
      title: "Preview & Export",
      description: "Review your generated content instantly. Download script and audio files ready for video production.",
      icon: FaPlayCircle,
      color: "text-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      number: "04",
      title: "Create & Share",
      description: "Import to your favorite video editor or use our upcoming full video generation. Share instantly to social media.",
      icon: FaDownload,
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent mb-6">
            How It Works
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Create professional videos in 4 simple steps. No technical skills needed.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-12 group">
                {/* Step number */}
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-500 z-10">
                  <span className="text-2xl font-bold text-white drop-shadow-lg">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 lg:ml-[-4rem] lg:mr-12">
                  <div className={`inline-flex p-3 rounded-2xl ${step.bgColor} shadow-lg mb-6 group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className={`w-10 h-10 ${step.color}`} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>

                {/* Line decoration */}
                <div className="hidden lg:block w-px h-32 bg-gradient-to-b from-indigo-200 to-purple-200 mx-12 opacity-50"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

