import{ useState } from 'react'
import axios from "axios";

import CodeEditor from "../compoents/CodeEditor";
import ReviewCard from "../compoents/ReviewCard";
import ScoreCard from "../compoents/ScoreCard";
import ImprovedCode from "../compoents/ImprovedCode";


const DEFAULT_CODE = `function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}`;

const Editor = () => {
    const [code, setCode] = useState(DEFAULT_CODE);
    const [review, setReview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [divison, setDivison] = useState("code"); // "code" or "review"

    const getReview = async () => {
        setLoading(true);
        try {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/reviewcode`, {
                code,
            });
            setReview(res.data.ReviewedCode);
            setDivison("review");
        } catch (error) {
            console.error("Review failed:", error);
        } finally {
            setLoading(false);
        }
    };
    return (
 <div className="flex h-screen flex-col bg-slate-950 text-slate-100">

            <div className="flex border-b border-slate-800 sm:hidden">
                <button
                    onClick={() => setDivison("code")}
                    className={`flex-1 py-3 text-center font-medium border-b-2 transition-colors ${divison === "code"
                            ? "border-blue-500 text-blue-400 bg-slate-900"
                            : "border-transparent text-slate-400"
                        }`}
                >
                    Code Editor
                </button>
                <button
                    onClick={() => setDivison("review")}
                    className={`flex-1 py-3 text-center font-medium border-b-2 transition-colors ${divison === "review"
                            ? "border-blue-500 text-blue-400 bg-slate-900"
                            : "border-transparent text-slate-400"
                        }`}
                >
                    Review Results
                </button>
            </div>

            <div className="flex min-h-0 flex-1 flex-col sm:flex-row">

                <div
                    className={`w-full md:w-1/2 flex-col border-r border-slate-800 p-4 min-h-0 flex-1 ${divison === "code" ? "flex" : "hidden sm:flex"
                        }`}
                >
                    <div className="mb-3 flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Editor</h2>
                        <button
                            onClick={getReview}
                            disabled={loading}
                            className="rounded bg-emerald-500 px-5 py-2 text-slate-950 transition hover:bg-emerald-600 cursor-pointer disabled:opacity-50"
                        >
                            {loading ? "Reviewing..." : "Review Code"}
                        </button>
                    </div>
                    <div className="flex min-h-0 flex-1 flex-col">
                        <CodeEditor value={code} onChange={(value) => setCode(value ?? "")} />
                    </div>
                </div>

                <div
                    className={`w-full sm:w-1/2 flex-col overflow-y-auto p-4 ${divison === "review" ? "flex" : "hidden sm:flex"
                        }`}
                >
                    <h2 className="mb-4 text-lg font-semibold">Review Results</h2>

                    {review ? (
                        <div className="space-y-4">
                            <ScoreCard score={review.score} verdict={review.verdict} />
                            <ReviewCard title="Bugs" items={review.bugs} />
                            <ReviewCard title="Performance" items={review.performance} />
                            <ReviewCard title="Readability" items={review.readability} />
                            <ReviewCard title="Security" items={review.security} />
                            <ImprovedCode code={review.improvedCode} />
                            <div className="w-full flex flex-row p-2 gap-3.5 items-center">
                                <p className="sm:text-2xl text-m">Click to Replace your existing code to Impoved Code :</p>
                                <button
                                    onClick={() => {
                                        setCode(review.improvedCode);
                                        setDivison("code"); // Optional: Switch back to editor after applying fix
                                    }}
                                    className="bg-emerald-600 hover:bg-emerald-500 p-2 text-xl w-[100px] rounded sm:w-[120px] transition cursor-pointer text-center"
                                >
                                    Fix it
                                </button></div>

                        </div>
                    ) : (
                        <p className="text-slate-400">
                            Click &quot;Review Code&quot; to see results here.
                        </p>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Editor
