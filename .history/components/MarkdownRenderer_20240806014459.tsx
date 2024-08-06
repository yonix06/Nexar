import ReactMarkdown from 'react-markdown';
import fs from 'fs/promises';

<<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
const MarkdownRenderer = async ({ filePath }: { filePath: string }) => {
  const isFileInProject = filePath.startsWith("./") || filePath.startsWith("/");
  const filePathToRead = isFileInProject ? join(process.cwd(), filePath) : filePath;
  const markdownContent = await fs.readFile(filePathToRead, 'utf-8');
  const markdownContent = await fs.readFile(filePath, 'utf-8');
  return <ReactMarkdown>{markdownContent}</ReactMarkdown>;
};

<<<<<<<  d1cc6eff-a705-4501-84c2-97fc7d68bc23  >>>>>>>
export default MarkdownRenderer;