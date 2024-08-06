import React from 'react';
import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import path from 'path';


export async function getStaticProps() {
  const root = process.cwd();
  const readmePath = path.join(root, 'README.md');
  return {
    props: {
      readmeContent: fs.readFileSync(readmePath, 'utf8'),
    },
  };
}

export default function MarkdownRenderer({ readmeContent }: { readmeContent: string }) {
  const markdown = readmeContent;
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
}