import { useCallback, useMemo } from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'tailwind';

const StyledDownloadDocument = styled.div`
  color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DownloadLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

interface DownloadDocumentProps {
  fileUrl: string;
}

export function DownloadDocument({ fileUrl }: DownloadDocumentProps) {
  const downloadLink = useMemo(() => `/download/${encodeURIComponent(fileUrl)}`, [fileUrl]);

  const handleDownload = useCallback(() => {
    window.open(downloadLink, '_blank');
  }, [downloadLink]);

  return (
    <StyledDownloadDocument>
      <button type="button" onClick={handleDownload}>
        Télécharger le fichier
      </button>
      <Route
        path="/download/:fileUrl"
        element={<DownloadFile fileUrl={decodeURIComponent(fileUrl)} />}
      />
    </StyledDownloadDocument>
  );
}

function DownloadFile({ fileUrl }: DownloadDocumentProps) {
  const handleDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = true;
    link.click();
  }, [fileUrl]);

  return (
    <DownloadLink onClick={handleDownload}>
      Cliquez ici pour télécharger le fichier
    </DownloadLink>
  );
}

export default DownloadDocument;

