import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("## markdown preview");
  console.log(markdown);

  return (
    <>
      <main>
        <section>
          <textarea
            name=""
            id=""
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="textinput"
          ></textarea>
          <article>
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
