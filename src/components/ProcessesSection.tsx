
import ProcessCard from "./ProcessCard";
import { Building, Globe, Award } from "lucide-react";

const ProcessesSection = () => {
  const equitySteps = [
    {
      title: "Strategic Diligence",
      description: "One-on-one sessions with a Venture Analyst to understand business goals and funding requirements",
      details: [
        "Valuation benchmarking using comparable deals, revenue models, and future growth potential",
        "Review of business model, cost structure, traction, and risks",
        "Identification of potential red flags from an investor lens"
      ],
      outcome: "Sharpened investment narrative aligned with current investor expectations"
    },
    {
      title: "Virtual Data Room (VDR) Setup",
      description: "Assistance creating a secure folder with essential documents",
      details: [
        "✅ Pitch deck",
        "✅ Financial projections (3–5 years)",
        "✅ One-pager",
        "✅ Company legal documents (incorporation, DPIIT, tax status)",
        "✅ Cap table, business plan, founder bios"
      ],
      outcome: "Ready-to-share data room that builds investor trust and speeds due diligence"
    },
    {
      title: "Mock Pitch & Final Readiness",
      description: "Dry-run investor pitches with mentors and ex-investors",
      details: [
        "Feedback on pitch delivery, objections, financial assumptions, and presentation",
        "Strategy adjustments based on investor psychology and market benchmarks"
      ],
      outcome: "Pitch-ready with real-world confidence"
    },
    {
      title: "Investor Outreach",
      description: "AI-driven matchmaking tools for targeted investor connections",
      details: [
        "AI-driven matchmaking tools (Pitchbook, Crunchbase, internal database of 558K+ investors)",
        "Identify ideal investors by stage, geography, sector, cheque size",
        "Automated outreach with custom templates + email tracking",
        "Coordinate intro calls and calendar syncing"
      ],
      outcome: "Warm, qualified investor conversations—no cold pitching"
    },
    {
      title: "Deal Structuring & Closure",
      description: "Comprehensive support through final negotiations and fund disbursement",
      details: [
        "Help review/draft: term sheets, iSAFE agreements, equity/share issuance, debenture agreements",
        "Negotiation support on valuation, equity %, board structure, timelines",
        "Coordinate due diligence phase"
      ],
      outcome: "Funds raised and disbursed—support until money hits your account"
    }
  ];

  const grantProcess = [
    "Free access to AI Grant Bot to identify relevant grant programs",
    "Curated grants by sector, stage, founder eligibility",
    "Application guidance: proposal structuring, documentation, compliance",
    "Post-submission follow-ups with grant providers"
  ];

  const debtProcess = [
    "Loan readiness review: business stage, documents, revenue, credit history",
    "Prepare and review pitch for NBFCs/institutional lenders",
    "Direct connection with pre-vetted lending partners",
    "Support with paperwork: GST, ITR, MSME, bank statements",
    "Proposal submission and negotiation assistance"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <h2 className="mt-10 text-3xl md:text-5xl font-poppins font-semibold mb-6 animate-fade-in text-[#61238B]"
  style={{ letterSpacing: '-2px' }}>
  Our <span className="text-gradient">Comprehensive Process</span>
</h2>
          </div>
          <p className="font-inter text-xl text-gray-700 max-w-3xl mx-auto">
            We've designed a streamlined approach to help businesses access the funding they need to grow and scale.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          <ProcessCard
            icon={Building}
            title="Equity Fundraising Process"
            goal="Help startups or growing businesses raise funds from angels, VCs, or family offices."
            steps={equitySteps}
            outcome="Complete fundraising solution from strategy to fund disbursement"
            className="animate-fade-in-up"
          />

          <div className="grid md:grid-cols-2 gap-8">
            <ProcessCard
              icon={Globe}
              title="Grant Discovery & Application Process"
              goal="Help BNI founders unlock non-dilutive capital from national and international grant bodies."
              process={grantProcess}
              fee="₹349 one-time + 5% of disbursal (success-based)"
              outcome="Access free capital while staying equity-light"
              className="animate-fade-in-up animation-delay-200"
            />

            <ProcessCard
              icon={Award}
              title="Debt Facilitation Process"
              goal="Secure working capital or structured loans from NBFCs, banks, and debt institutions."
              process={debtProcess}
              fee="₹349 one-time + 5% on disbursal (success-based)"
              outcome="Quick, efficient access to growth capital without dilution"
              className="animate-fade-in-up animation-delay-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessesSection;
