import { SimpleListSection } from "./shared/SimpleListSection";
import { TitleWithPeriod } from "./shared/TitleWithPeriod";

export function WorkExperienceItem({ workExperience }) {
  return (
    <>
      {/*Work experience item*/}
      <div className="flex flex-col">
        {/*Company name*/}
        <TitleWithPeriod title={workExperience.companyName} period={workExperience.workPeriod} />

        {/*Job title*/}
        <p className="sub-title text-[0.8rem] mb-2">{workExperience.jobTitle}</p>
        {/*Job description list*/}
        <ul className="flex flex-col pl-4">
          {workExperience.sections.map(section => (
            <li key={section.id}>
              <SimpleListSection
                title={section.title}
                description={section.description}
                items={section.items} />
            </li>))}
        </ul>
        {/*End Job description list*/}
      </div>
      {/*End Work experience item*/}
    </>
  );
}

