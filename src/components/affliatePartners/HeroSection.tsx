import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-8 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-poppins font-semibold mb-6 animate-fade-in text-[#61238B]"
  style={{ letterSpacing: '-2px' }}>
            Your Portfolio Deserves the{" "}
            <span className="text-gradient">
              Best Fundraising Support
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Partner with MyProBuddy to help your startups raise capital efficiently with our white-glove fundraising expertise and proven track record.
          </p>
          
          <Button 
            size="lg" 
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#ef3e25] hover:bg-[#d53720] text-white font-medium px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <div className="mt-16 relative">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#f46d19] rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Higher Success Rate</h3>
                  <p className="text-gray-600 text-sm">85% successful fundraised</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#ef3e25] rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Faster Capital Access</h3>
                  <p className="text-gray-600 text-sm">Average 3-month fundraising cycle</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#5d248f] rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-gray-600 text-sm">CFAs, Analysts & Investment Bankers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
