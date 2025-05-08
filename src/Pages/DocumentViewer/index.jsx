import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DocumentViewer = ({ docUrl }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeydown = (e) => {
      if (
        (e.ctrlKey && ["s", "u", "p"].includes(e.key.toLowerCase())) ||
        e.key === "F12"
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col bg-gray-100 relative">
      <button
        className="absolute top-4 left-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 z-50"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <div className="w-full h-full overflow-hidden">
        <iframe
          src={docUrl}
          title="Document Viewer"
          className="w-full h-full border-none"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  );
};

export default DocumentViewer;
