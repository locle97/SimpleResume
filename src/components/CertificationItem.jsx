import { GrayHRLine } from "./shared/GrayHRLine";

export function CertificationItem({ certification }) {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col w-3/4">
          <p className="font-bold">{certification.title}</p>
          <p className="text-sm">Issued by {certification.issuer}</p>
          <p className="mt-2">{certification.description}</p>
        </div>
        <p>{certification.issuedDate}</p>
      </div>
      <GrayHRLine />
    </>
  );
}

