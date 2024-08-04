import { ButtonGroup } from "./ButtonGroup";
import { sampleData } from '../data.jsx';
import { emptyData } from '../emptyData.jsx';
import { Accordion } from './shared/Accordion.jsx';
import { InputPersonalInfo } from "./InputPersonalInfo.jsx";
import { InputObjective } from "./InputObjective.jsx";

import { InputWorkExperiences } from './InputWorkExperiences.jsx';
import { InputProjects } from './InputProjects.jsx';
import { InputEducations } from './InputEducations.jsx';
import { InputCertifications } from "./InputCertifications.jsx";
import { InputAwards } from "./InputAwards";
import { InputSkills } from "./InputSkills";

import './CVInputSection.css';

function CVInputSection({ cvData, onChangeCV }) {
  const handleLoadSample = () => {
    onChangeCV(sampleData);
  }

  const handleDownloadCV = () => {
    window.print();
  }

  const handleClear = () => {
    onChangeCV(emptyData);
  }

  const handleSavePersonalInfo = (info) => {
    onChangeCV({ ...cvData, personalInfo: info });
  }

  const handleChangeObjective = (obj) => {
    onChangeCV({ ...cvData, objective: obj });
  }

  const handleChangeWorkExperiences = (obj) => {
    onChangeCV({ ...cvData, workExperiences: obj });
  }

  const handleChangeProjects = (obj) => {
    onChangeCV({ ...cvData, projects: obj });
  }

  const handleChangeEducations = (obj) => {
    onChangeCV({ ...cvData, educations: obj });
  }

  const handleChangeCertifications = (obj) => {
    onChangeCV({ ...cvData, certifications: obj });
  }

  const handleChangeAwards = (obj) => {
    onChangeCV({ ...cvData, awards: obj });
  }

  const handleChangeSkills = (obj) => {
    onChangeCV({ ...cvData, skills: obj });
  }

  return (
    <div className="print:hidden m-4 w-1/3 shadow-md rounded-md flex flex-col sticky top-0 overflow-auto max-h-screen">
      <h1 className="text-2xl text-center bg-gray-100 p-2 rounded-t-md">Simple CV Builder</h1>
      <div className="p-4 flex">
        <ButtonGroup onLoadSample={handleLoadSample}
          onDownload={handleDownloadCV}
          onClear={handleClear} />
      </div>
      <Accordion title="Personal Info" expanded={true}>
        <InputPersonalInfo inputInfo={cvData.personalInfo} onSave={handleSavePersonalInfo} />
      </Accordion>

      <Accordion title="Objective" expanded={false}>
        <InputObjective objective={cvData.objective} onSave={handleChangeObjective} />
      </Accordion>

      <Accordion title="Work expieriences" expanded={false}>
        <InputWorkExperiences workExperiences={cvData.workExperiences} onSave={handleChangeWorkExperiences} />
      </Accordion>

      <Accordion title="Projects" expanded={false}>
        <InputProjects projects={cvData.projects} onSave={handleChangeProjects} />
      </Accordion>

      <Accordion title="Educations" expanded={false}>
        <InputEducations educations={cvData.educations} onSave={handleChangeEducations} />
      </Accordion>

      <Accordion title="Certifications" expanded={false}>
        <InputCertifications certifications={cvData.certifications} onSave={handleChangeCertifications} />
      </Accordion>

      <Accordion title="Awards" expanded={false}>
        <InputAwards awards={cvData.awards} onSave={handleChangeAwards} />
      </Accordion>

      <Accordion title="Skills" expanded={false}>
        <InputSkills skills={cvData.skills} onSave={handleChangeSkills} />
      </Accordion>
    </div>
  );
}

export default CVInputSection;
