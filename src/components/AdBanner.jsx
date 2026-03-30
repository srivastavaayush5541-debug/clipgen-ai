function AdBanner() {
  return (
    <div className="my-6 text-center">
      <p className="text-gray-400 text-sm mb-2">Advertisement</p>
      <div className="bg-gradient-to-r from-purple-100 to-blue-100 h-24 flex items-center justify-center rounded-xl shadow-sm">
        <span className="text-gray-600">Your Ad Here</span>
      </div>
    </div>
  );
}

export default AdBanner;
