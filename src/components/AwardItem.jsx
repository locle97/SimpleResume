import { GrayHRLine } from './shared/GrayHRLine';
export function AwardItem({ award }) {
    return (
        <>
            <div className="flex justify-between">
                <div className="flex flex-col w-3/4">
                    <p className="font-bold">{award.title}</p>
                    <p className="text-sm">Issued by {award.issuer}</p>
                    <p className="mt-2">{award.description}</p>
                </div>
                <p>{award.issuedDate}</p>
            </div>
            <GrayHRLine />
        </>
    );
}

