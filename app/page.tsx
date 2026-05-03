export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          ATS Resume Checker
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Does Your Resume Pass{" "}
          <span className="text-[#58a6ff]">ATS Filters?</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Upload your resume and get an instant ATS score. See exactly which keywords are missing, which formatting rules you're breaking, and how to fix them — before a recruiter ever sees your file.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Checking — $9/mo
          </a>
          <a
            href="#how-it-works"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            See How It Works
          </a>
        </div>
        <p className="mt-4 text-xs text-[#6e7681]">No credit card required for demo · Cancel anytime</p>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-3xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: "01", title: "Upload Resume", desc: "Paste text or upload a PDF. We parse it instantly." },
            { step: "02", title: "ATS Scan", desc: "Our rule engine checks formatting, keywords, and structure." },
            { step: "03", title: "Fix & Resubmit", desc: "Get a prioritized fix list and rescan until you score 90+." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-2xl font-black mb-2">{item.step}</div>
              <div className="text-white font-semibold mb-1">{item.title}</div>
              <div className="text-[#8b949e] text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited resume scans",
              "ATS keyword gap analysis",
              "Formatting rule checker",
              "Before/after score comparison",
              "Job description matching",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What is an ATS and why does it matter?",
              a: "An Applicant Tracking System (ATS) is software used by 99% of Fortune 500 companies to filter resumes before a human ever reads them. If your resume isn't formatted correctly or lacks the right keywords, it gets rejected automatically."
            },
            {
              q: "What file formats do you support?",
              a: "We support PDF and plain text. For best results, upload a clean single-column PDF. We'll flag any formatting issues that could confuse ATS parsers."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel with one click from your billing portal. You keep access until the end of your billing period with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-white font-semibold mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} ATS Resume Checker · Built for job seekers
      </footer>
    </main>
  );
}
