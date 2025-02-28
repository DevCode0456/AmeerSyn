import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// FIX: Use correct PDF worker from CDN
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();const PDFViewer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pdfUrl = location.state?.pdfUrl || "";

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      >
        Back to Projects
      </button>

      <div className="bg-white p-5 shadow-lg rounded-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-center">PDF Viewer</h2>
        {pdfUrl ? (
          <Document file={pdfUrl} loading={<p>Loading PDF...</p>}>
            <Page pageNumber={1} renderAnnotationLayer={false} />
          </Document>
        ) : (
          <p className="text-center text-red-500">No PDF found!</p>
        )}
      </div>
    </div>
  );
};

export default PDFViewer;
