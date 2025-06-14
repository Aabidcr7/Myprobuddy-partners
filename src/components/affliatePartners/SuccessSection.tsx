
const SuccessSection = () => {
  return (
    <section id="success-stories" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mt-10 text-3xl md:text-5xl font-poppins font-semibold mb-6 animate-fade-in text-[#61238B]"
  style={{ letterSpacing: '-2px' }}>
            <span className="text-gradient">Success Stories</span> from Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how leading incubators and accelerators have transformed their portfolio companies' fundraising outcomes with our expert support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[#5d248f]">TC</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-xl">TechCelerator</h3>
                  <p className="text-gray-600 text-sm">Leading B2B Tech Accelerator</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Portfolio Size:</span>
                  <span className="font-semibold">24 companies</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Capital Raised:</span>
                  <span className="font-semibold text-green-600">$18.2M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Success Rate:</span>
                  <span className="font-semibold text-green-600">92%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Fundraising Time:</span>
                  <span className="font-semibold">2.8 months</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-xl">
                <p className="text-gray-700 italic">
                  "MyProBuddy transformed our portfolio companies' fundraising outcomes. Their expert team and systematic approach helped us achieve a 92% success rate across our cohort."
                </p>
                <p className="text-sm text-gray-600 mt-2">— Sarah Chen, Managing Director</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[#ef3e25]">IV</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-xl">Innovation Ventures</h3>
                  <p className="text-gray-600 text-sm">Healthcare & Biotech Incubator</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Portfolio Size:</span>
                  <span className="font-semibold">15 companies</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Capital Raised:</span>
                  <span className="font-semibold text-green-600">$32.5M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Success Rate:</span>
                  <span className="font-semibold text-green-600">87%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Fundraising Time:</span>
                  <span className="font-semibold">3.2 months</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-xl">
                <p className="text-gray-700 italic">
                  "The specialized knowledge in healthcare fundraising and investor network access made all the difference. Our portfolio companies raised 40% more capital than previous cohorts."
                </p>
                <p className="text-sm text-gray-600 mt-2">— Dr. Michael Rodriguez, Program Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
