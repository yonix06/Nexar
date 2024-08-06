import ReactMarkdown from 'react-markdown';
import fs from 'fs/promises';

const MarkdownRenderer = async ({ "../../README.md" }) => {
  const markdownContent = await fs.readFile("filePath", 'utf-8');
  return <ReactMarkdown>{markdownContent}</ReactMarkdown>;
};

export default MarkdownRenderer;