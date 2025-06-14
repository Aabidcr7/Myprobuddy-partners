
import { Button } from "@/components/ui/button";
import { Award, Building, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#5d248f]/10 via-white to-[#f46d19]/10">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in-up max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h1 className="text-4xl md:text-6xl font-poppins font-semibold mb-6 animate-fade-in text-[#61238B]"
  style={{ letterSpacing: '-2px' }}>
              Partner <span className="text-gradient"> Program</span> 
            </h1>
          </div>
          
          <p className="font-inter text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Empower your community with MyProBuddy's proven fundraising and growth platform. 
            <span className="text-[#5d248f] font-semibold"> Earn revenue while delivering real value.</span>
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300 text-center">
              <Award className="w-6 h-6 mx-auto mb-4 text-[#ef3e25]" />
              <h3 className="font-poppins font-bold text-lg text-[#000000] mb-2">White-label Platform</h3>
              <p className="font-inter text-gray-600">Your branded fundraising solution</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300 text-center">
              <Globe className="w-6 h-6 mx-auto mb-4 text-[#5d248f]" />
              <h3 className="font-poppins font-bold text-lg text-[#000000] mb-2">Revenue Sharing</h3>
              <p className="font-inter text-gray-600">10-15% of gross revenue</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300 text-center">
              <Building className="w-6 h-6 mx-auto mb-4 text-[#f46d19]" />
              <h3 className="font-poppins font-bold text-lg text-[#000000] mb-2">Full Support</h3>
              <p className="font-inter text-gray-600">Dedicated team & training</p>
            </div>
          </div>
        </div>
        
        <div className="animate-fade-in-up animation-delay-200 flex flex-col sm:flex-row gap-4 justify-center items-center">
<a href="#partner-form">
  <Button 
    size="lg" 
    variant="outline" 
    className="bg-[#ef3e25] text-white font-inter font-semibold px-8 py-6 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105"
  >
    Become a Partner
  </Button>
</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
