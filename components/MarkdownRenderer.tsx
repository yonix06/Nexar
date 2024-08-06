"use client"
import React from 'react';
import ReactMarkdown from 'react-markdown';
import fs from 'react-native-windows/fs';
import path from 'path';


export function MarkdownRenderer({ filePath }: MarkdownRendererProps) {
  const [markdown, setMarkdown] = React.useState("");

  React.useEffect(() => {
    const fetchMarkdown = async () => {
      const rootDir = process.cwd();
      const markdownFilePath = path.join(rootDir, filePath);
      const markdownContent = await fs.readFile(markdownFilePath, "utf-8");
      setMarkdown(markdownContent);
    };

    fetchMarkdown();
  }, [filePath]);

  return <ReactMarkdown>{markdown}</ReactMarkdown>;
}