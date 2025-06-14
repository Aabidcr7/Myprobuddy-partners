const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-8 bg-[#F8F7FC] scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="why-us"  className="mt-10 text-3xl md:text-5xl font-poppins font-semibold mb-6 animate-fade-in text-[#61238B]"
  style={{ letterSpacing: '-2px' }}>
              Why <span className="text-gradient">Incubators Love Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We understand the unique challenges of managing multiple portfolio companies and their diverse fundraising needs. Our specialized approach delivers consistent results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#5d248f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Boost Fundraising </h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Increase your startups' fundraising success rate with our proven methodologies, investor network access, and expert guidance throughout the entire capital raising process.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#f46d19]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">White-Glove Service</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Our dedicated team of fundraising experts provides personalized, hands-on support for each portfolio company, ensuring premium service quality and attention to detail.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#5d248f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Save Bandwidth</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Free up your internal team to focus on core business activities while our external capital support specialists handle the complex fundraising process from start to finish.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#f46d19]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Cost-Effective</h3>
              <p className="text-sm text-gray-600 leading-relaxed text-justify">
                Our success-based pricing model eliminates upfront costs and retainer fees, making professional fundraising support accessible to portfolio companies of all sizes.
              </p>
            </div>
          </div>
          
         
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
