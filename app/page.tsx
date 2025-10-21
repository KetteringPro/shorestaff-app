// app/page.tsx

export default function ComingSoon() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-slate-800 px-4">
      {/* Logo */}
      <img
        src="/logo-dark.png"
        alt="ShoreStaff Logo"
        className="h-20 mb-4"
      />

      {/* Tagline */}
      <p className="text-coastal text-sm uppercase tracking-widest mb-2 font-medium">
        Staffing the coast, one restaurant at a time
      </p>

      {/* Headline */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 max-w-xl leading-tight">
        A smarter way to fill restaurant shifts — fast.
      </h1>

      <p className="text-center max-w-md text-slate-600 mb-8">
        We’re building a platform for restaurants to find qualified, insured workers — and for gig staff to pick up extra shifts without the hassle.
      </p>

      {/* Form */}
      <form
        action="https://formspree.io/f/YOUR_FORM_ID"
        method="POST"
        className="w-full max-w-sm space-y-4"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean"
        />
        <button
          type="submit"
          className="w-full bg-ocean text-white py-2 rounded-md hover:bg-teal transition"
        >
          Notify Me at Launch
        </button>
      </form>

      {/* Optional message */}
      <p className="text-xs text-slate-400 mt-6">
        No spam. Just one email when we go live.
      </p>

      {/* Custom colors via Tailwind config or inline */}
      <style jsx>{`
        .text-coastal {
          color: #0d9488;
        }
        .bg-ocean {
          background-color: #0891b2;
        }
        .hover\\:bg-teal:hover {
          background-color: #0d9488;
        }
        .focus\\:ring-ocean:focus {
          --tw-ring-color: #0891b2;
        }
      `}</style>
    </main>
  );
}