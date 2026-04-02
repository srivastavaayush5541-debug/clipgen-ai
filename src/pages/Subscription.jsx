import { useState, useEffect } from 'react';

const Subscription = ({ upgradePlan, plan }) => {
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  const plans = [
    {
      name: 'Free',
      price: '₹0 /month',
      limit: '1 video/day',
      duration: '15s max',
      watermark: 'Yes',
      ads: 'Yes',
      popular: false
    },
    {
      name: 'Premium',
      price: '₹199 /month',
      limit: '3 videos/day',
      duration: '30s max',
      watermark: 'No',
      ads: 'No',
      popular: false
    },
    {
      name: 'Pro',
      price: '₹249 /month',
      limit: '5 videos/day',
      duration: '30s max',
      watermark: 'No',
      ads: 'No',
      popular: true
    }
  ];


const handleUpgrade = async (planName) => {
    try {
      // Step 1: Create order on backend
      const res = await fetch('https://clipgen-ai.onrender.com/create-order', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ 
          amount: 500 // ₹500 in INR (change based on plan)
        })
      });
      
      const data = await res.json();
      
      if (!data.success || !data.id) {
        throw new Error(data.error || 'Order creation failed');
      }

      // Step 2: Open Razorpay checkout
      const options = {
        key: 'rzp_test_your-actual-key-id', // Replace with your test/live key
        amount: data.amount, // In paise from backend
        currency: data.currency, // 'INR'
        name: 'ClipGen AI',
        description: `${planName.toUpperCase()} Upgrade`,
        order_id: data.id, // Backend order ID
        handler: async function (response) {
          console.log('✅ Payment Success:', response);
          
          // Optional: Verify payment on backend
          try {
            const verifyRes = await fetch('https://clipgen-ai.onrender.com/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature
              })
            });
            
            const verifyData = await verifyRes.json();
            
            if (verifyData.success) {
              upgradePlan(planName);
              alert(`🎉 Upgraded to ${planName.toUpperCase()} successfully!`);
            } else {
              alert('Payment received but verification failed');
            }
          } catch (verifyErr) {
            console.error('Verification failed:', verifyErr);
            alert('Payment successful! (Verification pending)');
          }
        },
        prefill: { 
          name: 'Customer Name',
          email: 'customer@example.com'
        },
        theme: { 
          color: '#6c5ce7' 
        },
        modal: {
          ondismiss: function() {
            alert('Payment cancelled');
          }
        }
      };
      
      const rzp = new window.Razorpay(options);
      rzp.open();
      
    } catch (err) {
      console.error('Payment Error:', err);
      alert('Payment setup failed: ' + err.message);
    }
  };


  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your video creation journey
          </p>
          {plan.remaining === 0 && (
            <div className="mt-8 p-4 bg-orange-100 border border-orange-300 rounded-2xl max-w-md mx-auto">
              <p className="text-orange-800 font-semibold">Daily limit reached on {plan.plan} plan</p>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, index) => (
            <div key={index} className={`bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border-4 group hover:-translate-y-2 ${p.popular ? 'border-blue-500 ring-4 ring-blue-100 scale-[1.02]' : 'border-gray-200'} ${plan.plan === p.name.toLowerCase() ? 'ring-4 ring-green-200 border-green-400' : ''}`}>
              {p.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  ⭐ MOST POPULAR
                </div>
              )}
              
              {plan.plan === p.name.toLowerCase() && (
                <div className="mb-6 p-3 bg-emerald-100 border-2 border-emerald-300 rounded-2xl">
                  <span className="font-bold text-emerald-800 text-sm">✅ CURRENT PLAN</span>
                  <div className="text-xs text-emerald-700 mt-1">
                    {plan.remaining > 0 ? `${plan.remaining} videos left today` : 'Daily limit reached'}
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{p.name}</h3>
              <div className="text-4xl font-black text-gray-900 mb-2">{p.price}</div>
              
              <div className="space-y-3 mb-8 text-left p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{p.limit}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{p.duration}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 p-3 bg-white rounded-lg shadow-sm">
                  <div className="text-center p-2">
                    <div className="text-sm font-semibold text-gray-900">Watermark</div>
                    <div className={`text-xs px-2 py-1 rounded-full font-medium ${p.watermark === 'No' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {p.watermark}
                    </div>
                  </div>
                  <div className="text-center p-2">
                    <div className="text-sm font-semibold text-gray-900">Ads</div>
                    <div className={`text-xs px-2 py-1 rounded-full font-medium ${p.ads === 'No' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {p.ads}
                    </div>
                  </div>
                </div>
              </div>

              <button 
                className={`w-full py-4 px-6 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 ${plan.plan === p.name.toLowerCase() ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white hover:shadow-2xl hover:scale-[1.02]'} group-hover:scale-[1.02]`}
                onClick={() => handleUpgrade(p.name.toLowerCase())}
                disabled={plan.plan === p.name.toLowerCase()}
              >
                {plan.plan === p.name.toLowerCase() ? '✅ Current Plan' : `Upgrade to ${p.name}`}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 p-8 bg-white/50 backdrop-blur-sm rounded-3xl shadow-xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Current Status</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">{plan.remaining}</div>
              <div className="text-sm text-gray-600">Videos left today</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">{plan.plan?.toUpperCase()}</div>
              <div className="text-sm text-gray-600">Your plan</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">{plan.planInfo?.duration || 15}s</div>
              <div className="text-sm text-gray-600">Max duration</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;

