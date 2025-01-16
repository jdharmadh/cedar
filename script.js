document.addEventListener('DOMContentLoaded', () => {
    const markdownInput = document.getElementById('markdown-input');
    const markdownOutput = document.getElementById('markdown-output');

    // Load the marked library (ensure to include it in your HTML)
    function parseMarkdown(text) {
        return marked.parse(text); // Use the marked library to parse Markdown
    }

    markdownInput.addEventListener('input', () => {
        const markdownText = markdownInput.value;
        const htmlContent = parseMarkdown(markdownText);
        markdownOutput.innerHTML = htmlContent;
    });
});
