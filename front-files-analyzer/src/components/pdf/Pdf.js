// import './App.css';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useState } from 'react';
import sample from './sample.pdf';

export const Pdf = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(
      '.react-pdf__Page__textContent'
    );
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = '';
      style.left = '';
      style.transform = '';
    });
  }

  const nextPage = () => {
    console.log("next");
    if(pageNumber < numPages ) {
        setPageNumber(pageNumber + 1);
    }
  }

  const prevPage = () => {
    console.log("prev");
    if(pageNumber > 1 ) {
        setPageNumber(pageNumber - 1);
    }
  }

  return (
    <div className="App-pdf">
      <div class="app-vista">
      <Document file={sample} renderMode="svg" className="document" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} width="400" heigth="565" onLoadSuccess={removeTextLayerOffset} />
            <nav aria-label="Page navigation example" className="document">
                <ul className="pagination justify-content-center">
                    <li className="page-item">
                        <button onClick={prevPage} className="page-link"> &lt; </button>
                    </li>
                    <li className="page-item"><a className="page-link">{pageNumber} de {numPages}</a></li>
                    <li className="page-item">
                        <button onClick={nextPage} className="page-link"> &gt; </button>
                    </li>
                </ul>
            </nav>
      </Document>
    
      </div>
    </div>
  );
}