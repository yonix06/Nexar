import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const StyledVisualisationDoc = styled.div`
  color: pink;
`;

export interface VisualisationDocProps {
  path: string;
}

export function VisualisationDoc({ path }: VisualisationDocProps) {
  const [numPages, setNumPages] = useState(null);
  const { file } = useParams<{ file: string }>();

  useEffect(() => {
    const fetchFile = async () => {
      const response = await fetch(`${path}/${file}`);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setNumPages((await import('pdfjs-dist')).getPdfInfo(url).numPages);
    };
    fetchFile();
  }, [path, file]);

  return (
    <StyledVisualisationDoc>
      <h1>Visualisation du document: {file}</h1>
      {numPages ? (
        <Document file={`${path}/${file}`} onLoadSuccess={({ numPages: np }) => setNumPages(np)}>
          {Array.from({ length: numPages }, (_, i) => (
            <Page key={i + 1} pageNumber={i + 1} />
          ))}
        </Document>
      ) : (
        <p>Chargement du document...</p>
      )}
    </StyledVisualisationDoc>
  );
}

