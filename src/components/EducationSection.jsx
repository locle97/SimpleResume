import { GrayHRLine } from "./shared/GrayHRLine";
import { SectionTitle } from "./shared/SectionTitle";
import { EducationItem } from "./EducationItem";

export function EducationSection({ educations }) {
    if (!educations || educations.length === 0) {
      return null;
    }

    return (
        <>
            {/*Work experience*/}
            <div className="flex flex-col mb-6">
                <SectionTitle title="Educations" />
                {
                  educations.map((education, index) => (
                    <div key={education.id}>
                        <EducationItem education={education} />
                        <GrayHRLine />
                    </div>
                  ))
                }
            </div>
            {/*End Work experience*/}
        </>
    );
}

