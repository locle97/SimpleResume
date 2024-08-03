import { useState } from 'react';
import CVInputSection from './components/CVInputSection.jsx';
import CVDisplaySection from './components/CVDisplaySection.jsx';
import { data } from './data.jsx';

function MainContent() {
  const [cvData, setCVData] = useState(data);

  const handleCVChange = (newCVData) => {
    setCVData(newCVData);
  }

  return (
    <div className="content h-full flex">
      <CVInputSection cvData={cvData} onChangeCV={handleCVChange} />
      <CVDisplaySection cvData={cvData} />
    </div>
  )
}

export default MainContent;
