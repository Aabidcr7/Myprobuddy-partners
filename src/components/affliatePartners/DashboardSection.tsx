
const DashboardSection = () => {
  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mt-10 text-3xl md:text-5xl font-poppins font-semibold mb-6 animate-fade-in text-[#61238B]"
  style={{ letterSpacing: '-2px' }}>
                <span className="text-gradient">Dashboard Access</span> for Startup Tracking
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get complete visibility into your portfolio companies' fundraising progress with our comprehensive tracking dashboard designed specifically for incubators and accelerators.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#f46d19] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Progress View</h3>
                    <p className="text-gray-600">Monitor each startup's fundraising journey with live updates, milestones, and key metrics in an intuitive dashboard interface.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#ef3e25] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Investor Interest Tracking</h3>
                    <p className="text-gray-600">Track investor engagement levels, meeting schedules, and deal closure status for each portfolio company's fundraising activities.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#5d248f] rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Reports</h3>
                    <p className="text-gray-600">Generate detailed reports for internal reviews and investor relations, with customizable metrics and automated reporting schedules.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-semibold text-gray-900 text-lg">Portfolio Overview</h4>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-[#f46d19] rounded-full"></div>
                      <div className="w-3 h-3 bg-[#ef3e25] rounded-full"></div>
                      <div className="w-3 h-3 bg-[#5d248f] rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600 font-medium">Active Fundraising</span>
                      <span className="text-sm font-bold text-gray-900">12 companies</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600 font-medium">Total Capital Raised</span>
                      <span className="text-sm font-bold text-[#f46d19]">$24.5M</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600 font-medium">Success Rate</span>
                      <span className="text-sm font-bold text-[#ef3e25]">89%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600 font-medium">Avg. Time to Close</span>
                      <span className="text-sm font-bold text-[#5d248f]">3.2 months</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-[#f46d19]">24</div>
                        <div className="text-xs text-gray-500">Portfolio</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#ef3e25]">92%</div>
                        <div className="text-xs text-gray-500">Success</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#5d248f]">2.8M</div>
                        <div className="text-xs text-gray-500">Avg Raise</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
