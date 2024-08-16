// components/UploadFile.tsx

"use client"

import { useDropzone } from "react-dropzone";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function UploadFile() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onDrop = async (acceptedFiles: ( any )[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const validExtensions = ["pdf", "doc", "docx", "odt"];
      const fileName = file.name.toLowerCase();
      const extension = fileName.substring(fileName.lastIndexOf(".") + 1);
      if (!validExtensions.includes(extension)) {
        setMessage("Seuls les fichiers PDF, DOC, DOCX et ODT sont acceptés.");
        return;
      }
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);
    try {
      const response = await axios.post("../data/documents/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUploadedFile(response.data);
      setMessage("Chargement réussi !");
      await router.push("/");
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Glisser les fichiers ici ...</p>
      ) : (
        <p>Glissez-déposez des fichiers ici, ou cliquez pour les sélectionner</p>
      )}
      {uploadedFile && <p>Chargement réussi ! : {uploadedFile}</p>}
      {message && <p>{message}</p>}
      {loading && <p>Chargement...</p>}
    </div>
  );
}

export { UploadFile };
