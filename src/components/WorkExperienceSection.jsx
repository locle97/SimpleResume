import { GrayHRLine } from "./shared/GrayHRLine";
import { WorkExperienceItem } from "./WorkExperienceItem";
import { SectionTitle } from './shared/SectionTitle'

export function WorkExperienceSection({ workExperiences }) {
  if (!workExperiences) {
    return null;
  }

  return (
    <>
      {/*Work experience*/}
      <div className="flex flex-col mb-6">
        <SectionTitle title="Work experience" />
        {workExperiences.map((workExperience, index) => (
          <div key={index}>
            <WorkExperienceItem workExperience={workExperience} />
            <GrayHRLine />
          </div>
        ))}
      </div>
      {/*End Work experience*/}
    </>
  );
}

