import { AwardItem } from "./AwardItem";
import { SectionTitle } from "./shared/SectionTitle";

export function AwardSection ({ awards }) {
  return (
    <>
      <SectionTitle title="Honors & Awards" />
      <div className="flex flex-col mb-6">
        {awards.map(award => (
          <AwardItem key={award.id} award={award} />
        ))}
      </div>
    </>
  );
}

