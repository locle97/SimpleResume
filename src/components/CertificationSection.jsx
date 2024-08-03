import { CertificationItem } from "./CertificationItem";
import { SectionTitle } from "./shared/SectionTitle";

export function CertificationSection({ certifications }) {
  return (
    <>
      <SectionTitle title="Certifications" />
      <div className="flex flex-col mb-6">
        {certifications.map(certification => (
          <CertificationItem key={certification.id} certification={certification} />
        ))}
      </div>
    </>
  );
}

