import { ObjectiveSection } from "./ObjectiveSection"
import { PersonalInfo } from "./PersonalInfo"
import { WorkExperienceSection } from "./WorkExperienceSection"
import { ProjectSection } from "./ProjectSection"
import { EducationSection } from "./EducationSection"
import { CertificationSection } from "./CertificationSection"
import { AwardSection } from "./AwardSection"

import { SkillSection } from "./SkillSection"

function CVDisplaySection({ cvData }) {
  return (
    <div id="cv-info" className="print:w-screen print:shadow-none flex flex-col m-4 print:mx-0 w-2/3 min-h-screen px-16 shadow-lg rounded-md">
      <PersonalInfo personalInfo={cvData.personalInfo} />
      <ObjectiveSection objective={cvData.objective} />
      <WorkExperienceSection workExperiences={cvData.workExperiences} />
      <ProjectSection projects={cvData.projects} />
      <EducationSection educations={cvData.educations} />
      <CertificationSection certifications={cvData.certifications} />
      <AwardSection awards={cvData.awards} />
      <SkillSection skills={cvData.skills} />
    </div>
  );
}

export default CVDisplaySection;