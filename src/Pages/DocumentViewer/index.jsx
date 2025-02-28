import React, { useEffect } from "react";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import { useLocation, useNavigate } from "react-router-dom";

const DocumentViewer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedDoc = location.state?.doc || null;

  useEffect(() => {
    const handleContextMenu = (event) => event.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);
    
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  if (!selectedDoc) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">No document found.</p>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex flex-col bg-gray-100">
      <button
        className="absolute top-4 left-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        onClick={() => navigate(-1)}
      >
        Back
      </button>

      <div className="w-full h-full overflow-hidden">
        <DocViewer documents={[selectedDoc]} pluginRenderers={DocViewerRenderers} />
      </div>
    </div>
  );
};

export default DocumentViewer;
