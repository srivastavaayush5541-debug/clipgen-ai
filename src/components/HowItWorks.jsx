const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      emoji: '✍️',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-500',
      title: 'Enter Your Idea',
      description: 'Type your video idea or script in seconds - no complex setup required'
    },
    {
      number: '02',
      emoji: '⚙️',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-500',
      title: 'AI Generates Video',
      description: 'Our advanced AI creates your complete video automatically with perfect timing'
    },
    {
      number: '03',
      emoji: '🚀',
      bgColor: 'bg-green-100',
      textColor: 'text-green-500',
      title: 'Download & Share',
      description: 'Download your ready-to-post video and share instantly across all platforms'
    }
  ];

  return (
    <section id="how" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            How It Works ⚡
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Create stunning AI videos in just 3 simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 text-center group cursor-pointer"
            >
              {/* Step Number Badge */}
              <div className="absolute top-6 left-6 text-xs font-bold bg-white px-3 py-1 rounded-full shadow-lg text-gray-800">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className={`w-14 h-14 mx-auto flex items-center justify-center rounded-xl mb-6 ${step.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                <span className={`text-2xl ${step.textColor}`}>{step.emoji}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight group-hover:text-gray-800 transition-colors">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

