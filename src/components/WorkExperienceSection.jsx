import { GrayHRLine } from "./shared/GrayHRLine";
import { WorkExperienceItem } from "./WorkExperienceItem";
import { SectionTitle } from './shared/SectionTitle'

export function WorkExperienceSection({ workExperiences }) {
  if (!workExperiences || workExperiences.length === 0)
    return null;

  return (
    <>
      {/*Work experience*/}
      <div className="flex flex-col mb-6">
        <SectionTitle title="Work experiences" />
        {workExperiences.map((workExperience, index) => (
          <div key={workExperience.id}>
            <WorkExperienceItem workExperience={workExperience} />
            <GrayHRLine />
          </div>
        ))}
      </div>
      {/*End Work experience*/}
    </>
  );
}

