import { useState } from 'react';
import CVInputSection from './components/CVInputSection.jsx';
import CVDisplaySection from './components/CVDisplaySection.jsx';
import { sampleData } from './data.jsx';

function MainContent() {
  const [cvData, setCVData] = useState(sampleData);

  const handleCVChange = (newCVData) => {
    setCVData(newCVData);
  }

  return (
    <div className="content my-8 h-full flex relative">
      <CVInputSection cvData={cvData} onChangeCV={handleCVChange} />
      <CVDisplaySection cvData={cvData} />
    </div>
  )
}

export default MainContent;
