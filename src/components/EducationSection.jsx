import { GrayHRLine } from "./shared/GrayHRLine";
import { SectionTitle } from "./shared/SectionTitle";
import { EducationItem } from "./EducationItem";

export function EducationSection({ educations }) {
    return (
        <>
            {/*Work experience*/}
            <div className="flex flex-col mb-6">
                <SectionTitle title="Education" />
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

