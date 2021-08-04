import React, { useState, useEffect } from 'react'
import './AssessmentPage.css';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
//importing docs
import APA_DSM5_Level_Anger_Adult from '../assets/Docs/APA_DSM5_Level-2-Anger-Adult.pdf';
import APA_DSM5_Level_Anxiety_Adult from '../assets/Docs/APA_DSM5_Level-2-Anxiety-Adult.pdf';
import APA_DSM5_Level_Depression_Adult from '../assets/Docs/APA_DSM5_Level-2-Depression-Adult.pdf';
import APA_DSM5_Level_Mania_Adult from '../assets/Docs/APA_DSM5_Level-2-Mania-Adult.pdf';
import APA_DSM5_Level_Repetitive_Thoughts_and_Behaviors_Adult from '../assets/Docs/APA_DSM5_Level-2-Repetitive-Thoughts-and-Behaviors-Adult.pdf';
import APA_DSM5_Level_Sleep_Disturbance_Adult from '../assets/Docs/APA_DSM5_Level-2-Sleep-Disturbance-Adult.pdf';
import APA_DSM5_Level_Somatic_Symptom_Adult from '../assets/Docs/APA_DSM5_Level-2-Somatic-Symptom-Adult.pdf';
import APA_DSM5_Level_Substance_Use_Adult from '../assets/Docs/APA_DSM5_Level-2-Substance-Use-Adult.pdf';


const docnames = [
    {
        name: 'APA_DSM5_Level_Anger_Adult',
        link: APA_DSM5_Level_Anger_Adult
    },
    {
        name: 'APA_DSM5_Level_Anxiety_Adult',
        link: APA_DSM5_Level_Anxiety_Adult
    },
    {
        name: 'APA_DSM5_Level_Depression_Adult',
        link: APA_DSM5_Level_Depression_Adult
    },
    {
        name: 'APA_DSM5_Level_Mania_Adult',
        link: APA_DSM5_Level_Mania_Adult
    },
    {
        name: 'APA_DSM5_Level_Repetitive_Thoughts_and_Behaviors_Adult',
        link: APA_DSM5_Level_Repetitive_Thoughts_and_Behaviors_Adult
    },
    {
        name: 'APA_DSM5_Level_Sleep_Disturbance_Adult',
        link: APA_DSM5_Level_Sleep_Disturbance_Adult
    },
    {
        name: 'APA_DSM5_Level_Somatic_Symptom_Adult',
        link: APA_DSM5_Level_Somatic_Symptom_Adult
    },
    {
        name: 'APA_DSM5_Level_Substance_Use_Adult',
        link: APA_DSM5_Level_Substance_Use_Adult
    },
]
function AssessmentPage() {
    const [document, setDocument] = useState(null);
    //for document related works
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    useEffect(() => {
        return;
    }, [document])
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <div className="main__assessment__page">
            <div className="doc__selector">
                <div className="doc__selection__tab  flex__center">
                    {
                        docnames.map((item) => {
                            return (
                                <div className="doc__div" onClick={() => { setDocument(item.link); setPageNumber(1) }}>
                                    {
                                        item.name
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="doc__display flex__center">
                {
                    (document !== null) ? (
                        <>
                            <Document
                                file={document}
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
                        </>
                    ) : (
                        <>
                            <h1>Select a document</h1>
                            <p>By completing this self-assessment, you acknowledge that the results you receive are not a mental health diagnosis. If you are experiencing any of the symptoms listed in this evaluation, consult a licensed mental health professional for a possible diagnosis.</p>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default AssessmentPage
