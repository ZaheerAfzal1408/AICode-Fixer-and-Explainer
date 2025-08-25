import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./ExplainCode.css";

export default function ExplainCode() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("python");
  const [output, setOutput] = useState(
    "💡 Your explanation will appear here..."
  );
  const [loading, setLoading] = useState(false);

  const explainCode = async () => {
    if (!code.trim()) {
      setOutput("⚠️ Please paste some code first!");
      return;
    }

    setLoading(true);
    setOutput("⏳ Analyzing your code... Please wait.");

    try {
      // Updated backend URL to your old website's port
      const response = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, language }),
      });

      const data = await response.json();

      if (data.explanation) {
        setOutput(data.explanation);
      } else if (data.error) {
        setOutput(`⚠️ Error: ${data.error}`);
      } else {
        setOutput("❌ No explanation returned. Try again.");
      }
    } catch (err) {
      console.error(err);
      setOutput(`⚠️ Error explaining code: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <main>
        <h2>Explain Your Code</h2>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your code here..."
        />
        <br />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="language-select"
        >
          <option value="python">🐍 Python</option>
          <option value="cpp">💻 C++</option>
          <option value="javascript">⚡ JavaScript</option>
          <option value="java">☕ Java</option>
          <option value="csharp">#️⃣ C#</option>
          <option value="php">🐘 PHP</option>
          <option value="ruby">💎 Ruby</option>
          <option value="go">🐹 Go</option>
        </select>
        <br />
        <div className="explain-btn-container">
          <button
            className="explain-btn"
            onClick={explainCode}
            disabled={loading}
          >
            {loading ? "⏳ Explaining..." : "Explain Code"}
          </button>
        </div>
        <div className="output">{output}</div>
      </main>
      <Footer />
    </>
  );
}
