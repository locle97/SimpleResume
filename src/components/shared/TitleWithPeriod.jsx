export function TitleWithPeriod({ title, period }) {
    return (
        <>
            <div className="flex justify-between text-xl mb-4">
                <p className="sub-title text-base font-bold">{title}</p>
                <p className="sub-title text-base">{period}</p>
            </div>
        </>
    );
}

