import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import Terms from '../assets/Docs/TermsOfService.pdf';

function TermPage() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <div>
            <Document
                file={Terms}
                onLoadSuccess={onDocumentLoadSuccess}
                className="doc flex__center"
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <div className="page__selector__buttons flex__center">
                <button onClick={() => setPageNumber(pageNumber - 1)}>-</button>
                <p>{pageNumber}/{numPages}</p>
                <button onClick={() => setPageNumber(pageNumber + 1)}>+</button>
            </div>
        </div>
    )
}

export default TermPage