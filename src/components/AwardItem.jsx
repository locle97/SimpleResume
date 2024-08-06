import { GrayHRLine } from './shared/GrayHRLine';
import { TitleWithPeriod } from './shared/TitleWithPeriod';

export function AwardItem({ award }) {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col w-full">
          <div>
            <TitleWithPeriod title={award.title} period={award.issuedDate} />
          </div>
          <p className="text-[0.8rem]">Issued by {award.issuer}</p>
          <p className="mt-2">{award.description}</p>
        </div>
      </div>
      <GrayHRLine />
    </>
  );
}

