document.addEventListener("DOMContentLoaded", () => {
  const markdownInput = document.getElementById("markdown-input");
  const markdownOutput = document.getElementById("markdown-output");

  function parseMarkdown(text) {
    return marked.parse(text);
  }

  function renderContent() {
    const markdownText = markdownInput.value;
    const htmlContent = parseMarkdown(markdownText);
    markdownOutput.innerHTML = htmlContent;

    typeset();
  }

  function typeset() {
    if (window.MathJax) {
      if (window.MathJax.typeset) {
        console.log("MathJax typesetting triggered");
        try {
          window.MathJax.typeset([markdownOutput]);
        } catch (e) {
          console.error("MathJax typesetting error:", e);
        }
      } else {
        console.log("MathJax loaded but typeset not ready yet. Retrying...");
        setTimeout(typeset, 100);
      }
    } else {
      console.log("MathJax not loaded yet. Retrying...");
      setTimeout(typeset, 500);
    }
  }

  markdownInput.addEventListener("input", renderContent);
});
