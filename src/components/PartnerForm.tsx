import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Mail, User, Phone, Building, Globe, MapPin, MessageSquare, Award } from "lucide-react";

const PartnerForm = () => {
  const { toast } = useToast();
  const scriptURL = "https://script.google.com/macros/s/AKfycbzt8f4ZbNcSsknGfBomvtdBZbrC28CircxwE_igz3bnBiDDZRr7fuOzlOXlOJSePlHaCg/exec";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    partnerType: "",
    website: "",
    location: "",
    description: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePartnerTypeChange = (value: string) => {
    setFormData(prev => ({ ...prev, partnerType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form)
      });
      toast({
        title: "Form Submitted!",
        description: "Thank you! We'll be in touch soon."
      });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        role: "",
        partnerType: "",
        website: "",
        location: "",
        description: ""
      });
    } catch (error) {
      console.error("Error!", error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="partner-form" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
                       <h2 className="mt-10 text-3xl md:text-5xl font-poppins font-semibold mb-6 animate-fade-in text-[#61238B]"
  style={{ letterSpacing: '-2px' }}>
  Join Our <span className="text-gradient">Partner Network</span>
</h2>

            <p className="mt-3 text-gray-600">Fill the form below to apply as a partner with us</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#5d248f] to-[#f46d19] h-2"></div>
            <div className="p-8">
              <form name="partner-form" onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="pl-10 bg-gray-50 border-gray-200 focus:border-[#5d248f] rounded-xl"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-10 bg-gray-50 border-gray-200 focus:border-[#5d248f] rounded-xl"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="pl-10 bg-gray-50 border-gray-200 focus:border-[#5d248f] rounded-xl"
                  />
                </div>

                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    name="company"
                    placeholder="Organization/Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="pl-10 bg-gray-50 border-gray-200 focus:border-[#5d248f] rounded-xl"
                  />
                </div>

                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    name="role"
                    placeholder="Role/Designation"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="pl-10 bg-gray-50 border-gray-200 focus:border-[#5d248f] rounded-xl"
                  />
                </div>

                <div className="relative">
                  <Award className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    name="partnerType"
                    value={formData.partnerType}
                    onChange={handleChange}
                    required
                    className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:border-[#5d248f] w-full text-sm text-gray-700 font-inter"
                  >
                    <option value="" disabled>
                      Type of Partner
                    </option>
                    <option value="Affiliate">Affiliate</option>
                    <option value="Incubator">Incubator</option>
                    <option value="Accelerator">Accelerator</option>
                    <option value="Founder Community">Founder Community</option>
                    <option value="Venture Studio">Venture Studio</option>
                  </select>
                </div>

                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="url"
                    name="website"
                    placeholder="Website or Social Media Link (Optional)"
                    value={formData.website}
                    onChange={handleChange}
                    className="pl-10 bg-gray-50 border-gray-200 focus:border-[#5d248f] rounded-xl"
                  />
                </div>

                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    name="location"
                    placeholder="Location (City, State, Country)"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="pl-10 pt-3 pb-3 bg-gray-50 border-gray-200 focus:border-[#5d248f] rounded-xl"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                  <textarea
                    name="description"
                    placeholder="Brief description of your community or network"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full pl-10 pt-3 pb-3 resize-none bg-gray-50 border border-gray-200 rounded-xl focus:border-[#5d248f]"
                  />
                </div>

                <div className="pt-3">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 bg-[#ef3e25] hover:bg-[#d53720] text-white font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-base"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Your information is secure and will only be used to contact you about partnership opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerForm;
