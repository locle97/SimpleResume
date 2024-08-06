export function TitleWithPeriod({ title, period }) {
    return (
        <>
            <div className="flex justify-between text-[1.1rem]">
                <p className="sub-title font-bold">{title}</p>
                <p className="sub-title">{period}</p>
            </div>
        </>
    );
}

