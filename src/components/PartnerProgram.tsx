
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, Award } from "lucide-react";

const PartnerProgram = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#5d248f]/5 via-white to-[#f46d19]/5">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h2 className="mt-10 text-3xl md:text-5xl font-poppins font-semibold mb-6 animate-fade-in text-[#61238B]"
  style={{ letterSpacing: '-2px' }}>
  Explore <span className="text-gradient">Partner Program</span>
</h2>
          </div>
          <p className="font-inter text-xl text-gray-700 max-w-4xl mx-auto mb-4">
            Enable Affiliates, Incubators, Accelerators, Founder Communities, and Venture Studios to offer MyProBuddy services under their own brand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg animate-fade-in-up animation-delay-200 rounded-2xl">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#5d248f] to-[#f46d19] flex items-center justify-center">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-poppins font-bold text-2xl text-[#5d248f]">
                  White-label Structure
                </h3>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-[#5d248f]/10 to-[#f46d19]/10 p-6 rounded-xl border border-[#5d248f]/20">
                <h4 className="font-poppins font-bold text-3xl text-[#5d248f] mb-2">₹1,00,000</h4>
                <p className="font-inter text-gray-700 font-medium">One-time white-label fee</p>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Chapter-branded version of MyProBuddy platform",
                  "Dedicated MPB support team for onboarding & operations",
                  "Co-branded bootcamps, webinars, fundraising clinics"
                ].map((item, index) => (
                  <li key={index} className="font-inter text-gray-700 flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#f46d19] mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg animate-fade-in-up animation-delay-400 rounded-2xl">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#5d248f] to-[#f46d19] flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-poppins font-bold text-2xl text-[#FA4300]">
                  Revenue Sharing
                </h3>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gradient-to-r from-[#f46d19]/10 to-[#5d248f]/10 p-6 rounded-xl border border-[#f46d19]/20">
                <h4 className="font-poppins font-bold text-3xl text-[#FA4300] mb-2">10–15%</h4>
                <p className="font-inter text-gray-700 font-medium">of gross revenue from services</p>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Success fees from fundraising completions",
                  "Subscription revenue from platform usage",
                  "Transparent monthly reporting and analytics"
                ].map((item, index) => (
                  <li key={index} className="font-inter text-gray-700 flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#5d248f] mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16 animate-fade-in-up animation-delay-600">
          <div className="bg-gradient-to-r from-[#5d248f]/10 to-[#f46d19]/10 p-8 rounded-2xl max-w-4xl mx-auto mb-8 border border-[#5d248f]/20">
            <p className="font-inter font-semibold text-xl text-[#5d248f] mb-6">
              <span className="text-[#ef3e25]">Outcome:</span> Affiliates earn new revenue streams and offer direct, valuable services to their members
            </p>
            <p className="font-inter text-lg text-gray-700 italic">
              "Transform your community into a revenue-generating ecosystem while providing unmatched value to your members."
            </p>
            <div></div>
            <a href="#partner-form">
  <Button 
    size="lg" 
    className="mt-8 bg-gradient-to-r from-[#5d248f] to-[#f46d19] text-white font-inter font-semibold px-8 py-6 text-lg rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
  >
    Join Partner Program
  </Button>
</a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PartnerProgram;
