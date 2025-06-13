import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  User,
  Mail,
  Globe,
  Calendar,
  ArrowRight,
  Scale,
  Calculator,
  Palette,
  FileCheck,
  Shield,
  Settings,
  Users,
  TrendingUp,
  Target,
  Eye,
  CheckCircle,
  Handshake,
  Award,
  Clock,
  DollarSign,
  Star,
  Zap,
  Building2,
} from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const ServicePartnerForm = () => {
  const { toast } = useToast();
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyefeurzFwFASZl08vFSXN2Wu4DxiZ1pe2gTeT4eE2AJFaVs1KWA3peBXWx4kz8xXKz/exec";

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    linkedin: "",
    category: "",
    portfolio: "",
    experience: "",
    bio: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const form = e.target as HTMLFormElement;
      await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      });
      toast({
        title: "Application Submitted!",
        description: "Thank you for applying as a service partner.",
      });
      setFormData({
        name: "",
        company: "",
        email: "",
        linkedin: "",
        category: "",
        portfolio: "",
        experience: "",
        bio: "",
      });
    } catch (error) {
      console.error("Submission Error:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="partner-form"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Apply as a{" "}
              <span className="bg-gradient-to-r from-[#5d248f] to-[#f46d19] bg-clip-text text-transparent">
                Service Partner
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-inter">
              Let's bring expert-led support to high-potential startups
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#5d248f] to-[#f46d19] h-2"></div>
            <div className="p-8">
              <form
                name="service-partner-form"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Full Name */}
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5d248f] h-5 w-5" />
                  <Input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-10 bg-gray-50 border-gray-200 focus:border-[#5d248f]"
                  />
                </div>

                {/* Company Name */}
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5d248f] h-5 w-5" />
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="pl-10 bg-gray-50 border-gray-200 focus:border-[#5d248f]"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5d248f] h-5 w-5" />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-10 bg-gray-50 border-gray-200 focus:border-[#5d248f]"
                  />
                </div>

                {/* LinkedIn */}
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5d248f] h-5 w-5" />
                  <Input
                    type="url"
                    name="linkedin"
                    placeholder="LinkedIn Profile"
                    value={formData.linkedin}
                    onChange={handleChange}
                    required
                    className="pl-10 bg-gray-50 border-gray-200 focus:border-[#5d248f]"
                  />
                </div>

                {/* Category */}
                <div className="relative">
                  <Settings className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5d248f] h-5 w-5" />
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md focus:border-[#5d248f] w-full text-sm text-gray-700"
                  >
                    <option value="" disabled>
                      Select Service Category
                    </option>
                    <option value="Legal">Legal</option>
                    <option value="Finance">Finance</option>
                    <option value="Design">Design</option>
                    <option value="Compliance">Compliance</option>
                    <option value="Tech Audit">Tech Audit</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                {/* Portfolio */}
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5d248f] h-5 w-5" />
                  <Input
                    type="url"
                    name="portfolio"
                    placeholder="Website / Portfolio Link"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="pl-10 bg-gray-50 border-gray-200 focus:border-[#5d248f]"
                  />
                </div>

                {/* Experience */}
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5d248f] h-5 w-5" />
                  <Input
                    type="number"
                    name="experience"
                    placeholder="Years of Experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="pl-10 bg-gray-50 border-gray-200 focus:border-[#5d248f]"
                  />
                </div>

                {/* Bio */}
                <div className="relative">
                  <Textarea
                    name="bio"
                    placeholder="Short Bio or Company Description"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="bg-gray-50 border-gray-200 focus:border-[#5d248f]"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 bg-[#ef3e25] hover:bg-[#d53720] text-white font-bold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-base"
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : "Apply as Service Partner"}
                    {!isSubmitting && <ArrowRight className="h-5 w-5" />}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p className="font-inter">
              Your details will remain confidential and are used only for
              partnership consideration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Index = () => {
  // Add smooth scrolling function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Header />
      <div className="hidden md:block" style={{ height: '80px' }}></div>

      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Build the{" "}
              <span className="bg-gradient-to-r from-[#5d248f] to-[#f46d19] bg-clip-text text-transparent">
                Startup Backbone
              </span>
              , Together.
            </h1>
            <p className="text-xl text-gray-600 mb-8 font-inter max-w-2xl mx-auto">
              Join MyProBuddy as a Service Partner and support founders in their
              journey while building your business with revenue streams.
            </p>
            <a href="#apply-service-partner">
              <Button className="bg-[#ef3e25] hover:bg-[#d53720] text-white px-8 py-4 text-lg font-bold rounded-lg transition-all duration-200 inline-flex items-center gap-2">
                Apply as Service Partner
                <ArrowRight className="h-5 w-5" />
              </Button>
            </a>
          </div>
          <div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg">
              <h3 className="text-3xl md:text-4xl font-bold gradient-text bg-gradient-to-r from-[#5d248f] to-[#f46d19] bg-clip-text text-transparent">
                150+
              </h3>
              <p className="text-gray-600 mt-2 font-inter">
                Active Service Partners
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg">
              <h3 className="text-3xl md:text-4xl font-bold gradient-text bg-gradient-to-r from-[#5d248f] to-[#f46d19] bg-clip-text text-transparent">
                80+
              </h3>
              <p className="text-gray-600 mt-2 font-inter">
                Successful Collaborations
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg">
              <h3 className="text-3xl md:text-4xl font-bold gradient-text bg-gradient-to-r from-[#5d248f] to-[#f46d19] bg-clip-text text-transparent">
                1000+
              </h3>
              <p className="text-gray-600 mt-2 font-inter">
                Startups Supported
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Join Section */}
      <section id="who-can-join" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who Can Join as a{" "}
              <span className="bg-gradient-to-r from-[#5d248f] to-[#f46d19] bg-clip-text text-transparent">
                Service Partner
              </span>
              ?
            </h2>
            <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto">
              Partner with us to empower startups. We bring together experts and
              firms big and small who are passionate about driving startup
              success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <Scale className="h-8 w-8 text-[#5d248f]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Legal Firms</h3>
              <p className="text-gray-600 font-inter mb-4 text-justify">
                Startup incorporation, term sheet drafting, due diligence
                support, compliance guidance, and regulatory advisory services
                for emerging companies.
              </p>
              <ul className="text-sm text-gray-500 font-poppins space-y-1">
                <li>• Corporate structuring</li>
                <li>• Investment documentation</li>
                <li>• IP protection & licensing</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <Calculator className="h-8 w-8 text-[#f46d19]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Financial Consultants</h3>
              <p className="text-gray-600 font-inter mb-4 text-justify">
                Comprehensive valuation services, financial projections, tax
                planning strategies, and fundraising preparation for startups at
                all stages.
              </p>
              <ul className="text-sm text-gray-500 font-poppins space-y-1">
                <li>• Financial modeling</li>
                <li>• Due diligence support</li>
                <li>• Tax optimization</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <Palette className="h-8 w-8 text-[#ef3e25]" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Deck Designers & Pitch Consultants
              </h3>
              <p className="text-gray-600 font-inter mb-4 text-justify">
                Professional presentation design, pitch strategy development,
                storytelling expertise, and investor communication optimization.
              </p>
              <ul className="text-sm text-gray-500 font-poppins space-y-1">
                <li>• Investor deck creation</li>
                <li>• Pitch coaching</li>
                <li>• Brand development</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <FileCheck className="h-8 w-8 text-[#5d248f]" />
              </div>
              <h3 className="text-xl font-bold mb-3">CA/CS Firms</h3>
              <p className="text-gray-600 font-inter mb-4 text-justify">
                Regulatory filings, compliance audits, statutory requirements,
                and ongoing governance support for startup operations.
              </p>
              <ul className="text-sm text-gray-500 font-poppins space-y-1">
                <li>• Statutory compliance</li>
                <li>• Annual filings</li>
                <li>• Board governance</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-[#f46d19]" />
              </div>
              <h3 className="text-xl font-bold mb-3">ESG & Risk Consultants</h3>
              <p className="text-gray-600 font-inter mb-4 text-justify">
                Environmental, social, and governance advisory, risk assessment,
                sustainability frameworks, and impact measurement.
              </p>
              <ul className="text-sm text-gray-500 font-poppins space-y-1">
                <li>• ESG reporting</li>
                <li>• Risk mitigation</li>
                <li>• Impact assessment</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <Settings className="h-8 w-8 text-[#ef3e25]" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Tech/Product Audit Professionals
              </h3>
              <p className="text-gray-600 font-inter mb-4 text-justify">
                Technical due diligence, product assessment, architecture
                review, security audits, and technology roadmap evaluation.
              </p>
              <ul className="text-sm text-gray-500 font-poppins space-y-1">
                <li>• Code quality assessment</li>
                <li>• Security audits</li>
                <li>• Scalability review</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section id="why-partner" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why{" "}
              <span className="bg-gradient-to-r from-[#5d248f] to-[#f46d19] bg-clip-text text-transparent">
                Partner
              </span>{" "}
              with Us?
            </h2>
            <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto">
              MyProBuddy connects startups with the right service partners. Gain
              visibility, qualified leads, and community access while we handle
              business development for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <TrendingUp className="h-6 w-6 text-[#f46d19]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Steady Pipeline</h3>
                <p className="text-gray-600 font-inter text-justify">
                  Get connected to a steady flow of startups actively seeking
                  services like yours, with leads tailored to your domain
                  expertise.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <Users className="h-6 w-6 text-[#ef3e25]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Long-term Relationships
                </h3>
                <p className="text-gray-600 font-inter text-justify">
                  Foster meaningful, recurring engagements with startups as they
                  scale and evolve through different growth stages.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <Target className="h-6 w-6 text-[#5d248f]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Mission Impact</h3>
                <p className="text-gray-600 font-inter text-justify">
                  Be part of a larger mission to accelerate India's startup
                  ecosystem, driving innovation and contributing to economic
                  growth.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <Eye className="h-6 w-6 text-[#f46d19]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Brand Visibility</h3>
                <p className="text-gray-600 font-inter text-justify">
                  Increase your reach with co-branded campaigns, expert
                  features, and access to a growing network of founders and
                  investors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It{" "}
              <span className="bg-gradient-to-r from-[#5d248f] to-[#f46d19] bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto">
              Easy onboarding and flexible collaboration built for impact. We
              streamline every step from joining to generating revenue.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line - adjusted height calculation */}
              <div className="absolute left-8 top-8 h-[calc(85%-3rem)] w-0.5 bg-gray-200 hidden md:block"></div>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-white border-4 border-[#ef3e25] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg relative z-10">
                    <span className="text-lg font-bold text-[#ef3e25]">1</span>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex-1">
                    <div className="text-sm text-[#ef3e25] font-medium mb-2">
                      Week 1
                    </div>
                    <h3 className="text-xl font-bold mb-3">Apply to Partner</h3>
                    <p className="text-gray-600 font-inter text-sm">
                      Submit your application with credentials and portfolio.
                      Our team reviews your expertise and aligns it with our
                      startup ecosystem needs.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-white border-4 border-[#f46d19] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg relative z-10">
                    <span className="text-lg font-bold text-[#f46d19]">2</span>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex-1">
                    <div className="text-sm text-[#f46d19] font-medium mb-2">
                      Week 2
                    </div>
                    <h3 className="text-xl font-bold mb-3">Get Onboarded</h3>
                    <p className="text-gray-600 font-inter text-sm">
                      Complete our comprehensive onboarding process, get mapped
                      to relevant startup needs, and receive access to our
                      partner dashboard and resources.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-white border-4 border-[#5d248f] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg relative z-10">
                    <span className="text-lg font-bold text-[#5d248f]">3</span>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex-1">
                    <div className="text-sm text-[#5d248f] font-medium mb-2">
                      Week 3
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      Start Collaborating
                    </h3>
                    <p className="text-gray-600 font-inter text-sm">
                      Begin receiving matched startup opportunities, deliver
                      your services, and get paid directly by startups or
                      through our revenue-share model based on engagement type.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-white border-4 border-[#ef3e25] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg relative z-10">
                    <span className="text-lg font-bold text-[#ef3e25]">4</span>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex-1">
                    <div className="text-sm text-[#ef3e25] font-medium mb-2">
                      Ongoing
                    </div>
                    <h3 className="text-xl font-bold mb-3">Scale & Grow</h3>
                    <p className="text-gray-600 font-inter text-sm">
                      Build your practice through our ecosystem, access advanced
                      training, participate in partner events, and grow your
                      revenue with consistent startup engagements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What You Gain as a{" "}
              <span className="bg-gradient-to-r from-[#5d248f] to-[#f46d19] bg-clip-text text-transparent">
                Partner
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto">
              Unlock exclusive benefits to grow your business and lead in the
              startup ecosystem, with immediate and long-term value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-[#f46d19]" />
              </div>
              <h3 className="text-lg font-bold mb-2">Revenue Growth</h3>
              <p className="text-gray-600 font-inter text-sm">
                Increase your revenue by 30-50% through consistent startup
                engagements and recurring client relationships.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <Handshake className="h-6 w-6 text-[#ef3e25]" />
              </div>
              <h3 className="text-lg font-bold mb-2">Quality Clients</h3>
              <p className="text-gray-600 font-inter text-sm">
                Work with pre-vetted, high-potential startups that are serious
                about growth and professional service investment.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-[#5d248f]" />
              </div>
              <h3 className="text-lg font-bold mb-2">Recognition</h3>
              <p className="text-gray-600 font-inter text-sm">
                Gain recognition as a trusted expert through our platform,
                featured case studies, and industry showcases.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-[#f46d19]" />
              </div>
              <h3 className="text-lg font-bold mb-2">Time Efficiency</h3>
              <p className="text-gray-600 font-inter text-sm">
                Save time on business development and lead generation - we
                handle client acquisition while you focus on delivery.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#ef3e25]" />
              </div>
              <h3 className="text-lg font-bold mb-2">Network Access</h3>
              <p className="text-gray-600 font-inter text-sm">
                Connect with other service partners, investors, and industry
                leaders through our exclusive events and forums.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-[#5d248f]" />
              </div>
              <h3 className="text-lg font-bold mb-2">Priority Support</h3>
              <p className="text-gray-600 font-inter text-sm">
                Receive dedicated support, training resources, and priority
                access to new features and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Partners{" "}
              <span className="bg-gradient-to-r from-[#5d248f] to-[#f46d19] bg-clip-text text-transparent">
                Achieve
              </span>
            </h2>
            <p className="text-lg text-gray-600 font-inter max-w-3xl mx-auto">
              See how our service partners grew their practices and accelerated
              success through MyProBuddy’s strategic collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <Scale className="h-6 w-6 text-[#5d248f]" />
                </div>
                <div>
                  <h4 className="font-bold">LegalTech Associates</h4>
                  <p className="text-sm text-gray-500 font-poppins">
                    Legal Services
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-[#f46d19] fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 font-inter mb-4">
                "MyProBuddy helped us scale from 5 to 25 startup clients in just
                8 months. The quality of leads and ongoing support has been
                exceptional."
              </p>
              <div className="text-sm text-gray-500 font-poppins">
                <div className="flex justify-between">
                  <span>Revenue Growth:</span>
                  <span className="font-semibold text-[#ef3e25]">+180%</span>
                </div>
                <div className="flex justify-between">
                  <span>Client Retention:</span>
                  <span className="font-semibold text-[#ef3e25]">95%</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <Calculator className="h-6 w-6 text-[#f46d19]" />
                </div>
                <div>
                  <h4 className="font-bold">FinanceFirst Consulting</h4>
                  <p className="text-sm text-gray-500 font-poppins">
                    Financial Advisory
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-[#f46d19] fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 font-inter mb-4">
                "The partnership provided us access to Series A startups we
                could never reach before. Our expertise in financial modeling is
                now highly valued."
              </p>
              <div className="text-sm text-gray-500 font-poppins">
                <div className="flex justify-between">
                  <span>New Clients/Month:</span>
                  <span className="font-semibold text-[#ef3e25]">12-15</span>
                </div>
                <div className="flex justify-between">
                  <span>Average Deal Size:</span>
                  <span className="font-semibold text-[#ef3e25]">+250%</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                  <Palette className="h-6 w-6 text-[#ef3e25]" />
                </div>
                <div>
                  <h4 className="font-bold">Design Impact Studio</h4>
                  <p className="text-sm text-gray-500 font-poppins">
                    Design & Branding
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-[#f46d19] fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 font-inter mb-4">
                "Working with MyProBuddy startups has elevated our portfolio.
                We've created pitch decks that helped raise over ₹50 crores in
                funding."
              </p>
              <div className="text-sm text-gray-500 font-poppins">
                <div className="flex justify-between">
                  <span>Portfolio Growth:</span>
                  <span className="font-semibold text-[#ef3e25]">+300%</span>
                </div>
                <div className="flex justify-between">
                  <span>Success Rate:</span>
                  <span className="font-semibold text-[#ef3e25]">85%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ServicePartnerForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
