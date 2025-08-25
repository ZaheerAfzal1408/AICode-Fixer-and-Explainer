import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./BugFixer.css";

export default function BugFixer() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("🔍 Fixed code will appear here...");
  const [loading, setLoading] = useState(false);

  const fixBugs = async () => {
    if (!code.trim()) {
      setOutput("⚠️ Please paste some buggy code first!");
      return;
    }

    setLoading(true);
    setOutput("⏳ Fixing bugs... Please wait...");

    try {
      const response = await fetch("/api/fix", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, language }),
      });

      const data = await response.json();
      setOutput(data.fixedCode || "❌ No fixed code returned. Try again.");
    } catch (error) {
      console.error(error);
      setOutput(`⚠️ Error fixing code: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <main className="bugfixer-main">
        <h2>Bug Fixer</h2>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your buggy code here..."
          className="code-input"
        />
        <br />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="language-select"
        >
          <option value="javascript">⚡ JavaScript</option>
          <option value="python">🐍 Python</option>
          <option value="cpp">💻 C++</option>
          <option value="java">☕ Java</option>
          <option value="csharp">#️⃣ C#</option>
          <option value="php">🐘 PHP</option>
          <option value="ruby">💎 Ruby</option>
          <option value="go">🐹 Go</option>
        </select>
        <br />
        <button 
        className="bugfix-btn" 
        onClick={fixBugs} 
        disabled={loading}>
          {loading ? "Fixing..." : "Fix Bugs"}
        </button>
        <div className="output">{output}</div>
      </main>
      <Footer />
    </>
  );
}
