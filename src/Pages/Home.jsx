import { useNavigate } from "react-router-dom";


export default function Home() {
    const navigate=useNavigate();
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-slate-100 font-mono">

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b bg-[#0a0f1a] border-slate-800 sticky top-0">
        <span className="text-slate-200 font-medium text-sm tracking-tight">
          <span className="text-emerald-400">&lt;/&gt;</span> CodeReview<span className="text-emerald-400">AI</span>
        </span>
        <button
  onClick={() => navigate('/editor')}

          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-medium px-4 py-2 rounded-md transition cursor-pointer"
        >
          Open editor
        </button>
      </nav>

      {/* Hero */}
      <div className="max-w-xl mx-auto text-center px-8 pt-20 pb-16 font-sans">
        <div className="inline-flex items-center gap-2 border border-emerald-900 bg-emerald-950 text-emerald-400 text-xs px-3 py-1 rounded-full mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          Powered by AI
        </div>
        <h1 className="text-4xl font-medium text-slate-100 leading-tight tracking-tight mb-4">
          Your code, <span className="text-emerald-400">reviewed</span><br />in seconds
        </h1>
        <p className="text-slate-500 text-base leading-relaxed mb-9">
          Paste any Language Code. Get instant feedback on bugs, performance,
          readability, and security — plus a ready-to-use improved version.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={() => navigate("/editor")}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-medium text-sm px-6 py-2.5 rounded-lg transition cursor-pointer"
          >
            Start reviewing
          </button>
          <button className="border border-slate-700 text-slate-400 hover:text-slate-300 text-sm px-6 py-2.5 rounded-lg transition">
            See an example
          </button>
        </div>
      </div>

      {/* Code preview */}
      <div className="max-w-2xl mx-auto mx-8 border border-slate-800 rounded-xl overflow-hidden mb-12 w-[90%] sm:w-[70%]">
        <div className="bg-slate-900 px-4 py-2.5 flex items-center gap-1.5 border-b border-slate-800">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <span className="text-xs text-slate-500 ml-2">findMax.js</span>
        </div>
        <div className="bg-[#0d1117] p-6 flex gap-6 text-xs leading-relaxed">
          <div className="flex-1 min-w-0">
            <p className="text-slate-600 uppercase text-[11px] tracking-wider mb-2">Your code</p>
            <pre className="text-slate-400 whitespace-pre-wrap">{`function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}`}</pre>
          </div>
          <div className="w-px bg-slate-800 shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-emerald-600 uppercase text-[11px] tracking-wider mb-2">Improved</p>
            <pre className="text-slate-400 whitespace-pre-wrap">{`// Uses built-in Math.max
function findMax(arr) {
  if (!arr?.length)
    return null;
  return Math.max(...arr);
}`}</pre>
          </div>
        </div>
      </div>

      {/* Feature strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-b border-slate-800 font-sans">
        {[
          { icon: "🐛", title: "Bug detection", desc: "Catches edge cases and logic errors." },
          { icon: "⚡", title: "Performance", desc: "Spots inefficient loops and calls." },
          { icon: "🛡️", title: "Security", desc: "Flags injection risks and unsafe patterns." },
          { icon: "✨", title: "Better code", desc: "One click to apply the improved version." },
        ].map((f) => (
          <div key={f.title} className="p-5 border-r border-slate-800 last:border-r-0">
            <div className="text-lg mb-2">{f.icon}</div>
            <p className="text-sm font-medium text-slate-200 mb-1">{f.title}</p>
            <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-slate-700 py-5 font-sans">
        Built with React · Monaco Editor · AI
      </p>
    </div>
  );
}