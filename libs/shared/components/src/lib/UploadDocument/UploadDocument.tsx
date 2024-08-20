import { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

import styled from 'styled-components';

const StyledUploadDocument = styled.div`
  color: pink;
`;

const Dropzone = ({ setFile }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
};

const ConfirmFile = ({ file, setFile, setState }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post('https://www.virustotal.com/vtapi/v2/file/scan', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-apikey': 'ENTER_YOUR_API_KEY_HERE',
      },
    });

    const scanId = response.data.response_code;

    try {
      const checkResponse = await axios.get(`https://www.virustotal.com/vtapi/v2/file/report?resource=${scanId}`, {
      await axios.post('/scan', formData, {
        headers: {
          'x-apikey': 'ENTER_YOUR_API_KEY_HERE',
          'Content-Type': 'multipart/form-data',
        },
      });

      if (checkResponse.data.response_code === 1) {
        await axios.post('/scan', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setState('Line');
      } else {
        console.error('Le fichier est infecté');
      }
      setState('Line');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Confirm file upload</h2>
      <p>File: {file.name}</p>
      <p>Size: {file.size} bytes</p>
      <button onClick={handleSubmit}>Confirm upload</button>
    </div>
  );
};

export function UploadDocument() {
  const [file, setFile] = useState(null);
  const [state, setState] = useState('DragnDrop');
  return (
    <StyledUploadDocument>
      <h1>Welcome to UploadDocument!</h1>

  if (state === 'DragnDrop') {
    return (
      <StyledUploadDocument>
        <h1>Welcome to UploadDocument!</h1>

        <Dropzone setFile={setFile} />
      </StyledUploadDocument>
    );
  } else if (state === 'Line') {
    return (
      <StyledUploadDocument>
        <h1>Welcome to UploadDocument!</h1>

        <ConfirmFile file={file} setFile={setFile} setState={setState} />
      </StyledUploadDocument>
    );
  }
      <ul>
        <li>
          <Link to="/">UploadDocument root</Link>
        </li>
      </ul>
      <Route
        path="/"
        element={<div>This is the UploadDocument root route.</div>}
      />
    </StyledUploadDocument>
  );
}

export default UploadDocument;

