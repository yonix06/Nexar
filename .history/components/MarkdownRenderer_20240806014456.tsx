import ReactMarkdown from 'react-markdown';
import fs from 'fs/promises';

const MarkdownRenderer = async ({ filePath }: { filePath: string }) => {
  const isFileInProject = filePath.startsWith("./") || filePath.startsWith("/");
  const filePathToRead = isFileInProject ? join(process.cwd(), filePath) : filePath;
  const markdownContent = await fs.readFile(filePathToRead, 'utf-8');
  const markdownContent = await fs.readFile(filePath, 'utf-8');
  return <ReactMarkdown>{markdownContent}</ReactMarkdown>;
};

export default MarkdownRenderer;