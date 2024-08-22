import { useState } from 'react';
import CVInputSection from './components/CVInputSection.jsx';
import CVDisplaySection from './components/CVDisplaySection.jsx';
import { ButtonGroup } from "./components/ButtonGroup";

import { sampleData } from './data.jsx';
import { emptyData } from './emptyData.jsx';
import DynamicTitle from './components/shared/DynamicTitle.jsx';

function ResumeBuilder() {
  const [cvData, setCVData] = useState(sampleData);

  const handleCVChange = (newCVData) => {
    setCVData(newCVData);
  }

  const handleLoadSample = () => {
    setCVData(sampleData);
  }

  const printCV = () => {
    // Export & Print
    // Export Data as JSON
    window.print();
  }

  const exportJson = () => {
    const element = document.createElement("a");
    const textFile = new Blob([JSON.stringify(cvData)], { type: 'text/plain' });
    element.href = URL.createObjectURL(textFile);
    element.download = "exported-data.json";
    document.body.appendChild(element);
    element.click();
    document.body.appendChild(downloadAnchorNode);
  }

  const importJson = (e) => {
    // Open file dialog
    // Read file
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const content = e.target.result;
      setCVData(JSON.parse(content));
    }
    fileReader.readAsText(e.target.files[0]);
  }


  const handleClear = () => {
    setCVData(emptyData);
  }

  return (
    <div className="mt-8 flex flex-col">
      <DynamicTitle title="Simple Resume - Builder" />
      <div className="print:hidden flex justify-end border-b p-4 gap-2">
        <ButtonGroup onLoadSample={handleLoadSample}
          onDownload={printCV}
          onImport={importJson}
          onExport={exportJson}
          onClear={handleClear} />
      </div>
      <div className="content h-full flex relative">
        <div className="print:hidden flex justify-center w-1/3">
          <CVInputSection cvData={cvData} onChangeCV={handleCVChange} />
        </div>
        <div className="print:w-full h-full flex justify-center w-2/3">
          <CVDisplaySection cvData={cvData} />
        </div>
      </div>
    </div>
  )
}

export default ResumeBuilder;
