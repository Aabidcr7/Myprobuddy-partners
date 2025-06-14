const SupportSection = () => {
  return (
    <section id="support" className="py-8 bg-[#F8F7FC] scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2   className="mt-10 text-3xl md:text-5xl font-poppins font-semibold mb-6 animate-fade-in text-[#61238B]"
  style={{ letterSpacing: '-2px' }}>
              <span className="text-gradient">End-to-End Support</span> for Your Cohorts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial strategy to successful funding closure, our comprehensive approach ensures your portfolio companies receive expert guidance at every step of their fundraising journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-[#f46d19] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Dedicated Expert Team</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Your portfolio companies work with a dedicated team of CFAs, financial analysts, and investment bankers who understand startup fundraising dynamics and investor expectations.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-[#ef3e25] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Complete Process Coverage</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                From creating compelling pitch decks and financial models to managing equity issuance and term sheet negotiations, we handle every aspect of the fundraising process.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-[#5d248f] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Success-Based Model</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                No upfront costs or retainer fees. Our success-based pricing model aligns our interests with your portfolio companies' fundraising success, ensuring optimal results for everyone.
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Process Timeline</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 relative">
                <div className="hidden md:block absolute top-6 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#5d248f] to-[#f46d19]"></div>
                <div className="text-center relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#5d248f] to-[#f46d19] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold relative z-10">1</div>
                  <h4 className="text-base font-semibold text-gray-900 mb-2">Strategy & Planning</h4>
                  <p className="text-sm text-gray-600">Initial assessment and fundraising strategy development</p>
                </div>
                <div className="text-center relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#5d248f] to-[#f46d19] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold relative z-10">2</div>
                  <h4 className="text-base font-semibold text-gray-900 mb-2">Materials Creation</h4>
                  <p className="text-sm text-gray-600">Pitch deck, financial models, and data room preparation</p>
                </div>
                <div className="text-center relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#5d248f] to-[#f46d19] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold relative z-10">3</div>
                  <h4 className="text-base font-semibold text-gray-900 mb-2">Investor Outreach</h4>
                  <p className="text-sm text-gray-600">Strategic investor targeting and relationship building</p>
                </div>
                <div className="text-center relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#5d248f] to-[#f46d19] rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold relative z-10">4</div>
                  <h4 className="text-base font-semibold text-gray-900 mb-2">Deal Closure</h4>
                  <p className="text-sm text-gray-600">Term sheet negotiation and funding completion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
