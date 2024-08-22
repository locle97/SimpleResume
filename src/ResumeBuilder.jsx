import { useState, useEffect } from 'react';
import CVInputSection from './components/CVInputSection.jsx';
import CVDisplaySection from './components/CVDisplaySection.jsx';
import { ButtonGroup } from "./components/ButtonGroup";

import { emptyData } from './emptyData.jsx';
import DynamicTitle from './components/shared/DynamicTitle.jsx';

function ResumeBuilder() {
  const [cvData, setCVData] = useState(emptyData);

  useEffect(() => {
    fetchSampleData();
  }, []);

  const handleCVChange = (newCVData) => {
    setCVData(newCVData);
  }

  const fetchSampleData = async () => {
    const url = "sample.json";
    const response = await fetch(url);
    const data = await response.json();
    setCVData(data);
  }

  const printCV = () => {
    // Export & Print
    const backupTitle = document.title;
    document.title = cvData.personalInfo.firstName + " " + cvData.personalInfo.lastName + " - Simple Resume";
    window.print();
    document.title = backupTitle;
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
    if (e.target.files.length === 0) {
      return;
    }

    const file = e.target.files[0];
    var fileReader = new FileReader();

    fileReader.onload = function() {
      const textContent = fileReader.result;

      try {
        const parsedData = JSON.parse(textContent);
        setCVData(parsedData);

      } catch (error) {
        console.error('Invalid JSON file');
      }
    }

    fileReader.readAsText(file);
  }


  const handleClear = () => {
    setCVData(emptyData);
  }

  return (
    <div className="mt-8 flex flex-col">
      <DynamicTitle title="Simple Resume - Builder" />
      <div className="print:hidden flex justify-end border-b p-4 gap-2">
        <ButtonGroup onLoadSample={fetchSampleData}
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
