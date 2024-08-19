import { useState } from 'react';
import { TesseractWorker } from 'tesseract.js';
import styled from 'tailwind';

const StyledOCR = styled.div`
  color: pink;
`;

interface OCRProps {
  file: File;
}

export function OCR({ file }: OCRProps) {
  const [text, setText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const worker = new TesseractWorker({
    langPath: 'https://unpkg.com/tesseract.js@2.1.0/lang-data/',
  });

  worker
    .recognize(file)
    .then(({ data: { text } }) => setText(text))
    .catch(error => setError(error.message));

  return (
    <StyledOCR>
      <h1>Welcome to OCR!</h1>
      <p>
        {text ? (
          <div>
            <h2>The text extracted from the file is:</h2>
            <pre>{text}</pre>
          </div>
        ) : error ? (
          <div>
            <h2>There was an error:</h2>
            <pre>{error}</pre>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </p>
    </StyledOCR>
  );
}

