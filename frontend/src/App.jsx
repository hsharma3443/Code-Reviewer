import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  const [code, setCode] = useState("");

  const [review, setReview] = useState(``);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    const response = await axios.post("http://localhost:3000/ai/get-review", {
      code,
    });
    setReview(response.data);
  }

  return (
    <>
      <div className="top-bar">
        <img src={logo} alt="Logo" className="logo-img" />
        <div className="logo-text">Code Reviewer</div>
      </div>

      <main>
        <div className="left">
          <h2 className="editor-heading">Enter your code here...</h2>
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira Code", monospace',
                fontSize: 16,
                height: "100%",
                width: "100%",
                background: "transparent",
                color: "#f1f1f1",
              }}
            />
          </div>
          <div onClick={reviewCode} className="review">
            Review Code
          </div>
        </div>

        <div className="right">
          <h2 className="editor-heading">AI Review Output</h2>
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;
