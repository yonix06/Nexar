import React from 'react';
import ReactMarkdown from 'react-markdown';
import path from 'path';


export async function getStaticProps() {
  const root = process.cwd();
  const readmePath = path.join(root, 'README.md');
  const readmeContent = await fs.promises.readFile(readmePath, "utf-8");
  return {
    props: {
      readmeContent,
    },
  };
}

export default function MarkdownRenderer({ readmeContent }: { readmeContent: string }) {
  const markdown = readmeContent;
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
}